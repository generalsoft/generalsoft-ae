import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from './firebase-config.js';

// Resolve config: prefer build-time import, fall back to runtime window.__FIREBASE_DEFAULTS__
let firebaseAvailable = true;
let db = null;
let app = null;
const runtimeDefaults = typeof window !== 'undefined' && window.__FIREBASE_DEFAULTS__ && window.__FIREBASE_DEFAULTS__.config ? window.__FIREBASE_DEFAULTS__.config : null;
const effectiveConfig = (firebaseConfig && firebaseConfig.apiKey) ? firebaseConfig : runtimeDefaults;
if (!effectiveConfig || !effectiveConfig.apiKey) {
  firebaseAvailable = false;
  console.warn('Firebase client config missing; contact form will be disabled in this environment.');
} else {
  try {
    app = initializeApp(effectiveConfig);
    db = getFirestore(app);
    console.info('Firebase initialized for contact form (apiKey present).');
  } catch (e) {
    firebaseAvailable = false;
    console.error('Error initializing Firebase:', e);
  }
}

async function submitToFirebase(data, locale = 'en') {
  if (!firebaseAvailable || !db) {
    console.warn('submitToFirebase called but Firebase is not configured.');
    return { success: false, error: 'Firebase not configured' };
  }

  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      company: data.company || '',
      service: data.service || '',
      message: data.message,
      locale: locale,
      createdAt: serverTimestamp(),
      read: false
    });
    console.log('Contact form submitted successfully. ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Validates the contact form fields and returns validation errors.
 * @param {Object} data - The form data object
 * @param {string} locale - The locale ('en' or 'ar')
 * @returns {Object|null} - Returns an object with field errors or null if valid
 */
function validateForm(data, locale = 'en') {
  const errors = {};

  // Name validation
  if (!data.name || data.name.trim() === '') {
    errors.name = locale === 'ar' ? 'الرجاء إدخال الاسم الكامل' : 'Please enter your full name';
  }

  // Email validation
  if (!data.email || data.email.trim() === '') {
    errors.email = locale === 'ar'
      ? 'الرجاء إدخال البريد الإلكتروني'
      : locale === 'de'
        ? 'Bitte geben Sie Ihre E-Mail-Adresse ein'
        : 'Please enter your email address';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = locale === 'ar'
        ? 'الرجاء إدخال بريد إلكتروني صحيح'
        : locale === 'de'
          ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
          : 'Please enter a valid email address';
    }
  }

  // Message validation
  if (!data.message || data.message.trim() === '') {
    errors.message = locale === 'ar' ? 'الرجاء إدخال رسالتك' : 'Please enter your message';
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

/**
 * Shows validation error for a specific field
 */
function showFieldError(fieldId, message, locale = 'en') {
  const field = document.getElementById(fieldId);
  if (!field) return;

  // Remove any existing error message for this field
  const existingError = field.parentElement.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }

  // Add error styling to the field
  field.classList.add('error');
  field.style.borderColor = '#dc3545';

  // Create and insert error message
  const errorEl = document.createElement('span');
  errorEl.className = 'field-error';
  errorEl.style.cssText = 'color: #dc3545; font-size: 0.8125rem; margin-top: 0.25rem; display: block;';
  errorEl.textContent = message;
  field.parentElement.appendChild(errorEl);
}

/**
 * Clears all field-level validation errors
 */
function clearFieldErrors(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  // Remove error messages
  form.querySelectorAll('.field-error').forEach(el => el.remove());

  // Reset field styling
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.classList.remove('error');
    field.style.borderColor = '';
  });
}

/**
 * Initializes the contact form with validation and submission handling.
 * @param {string} formId - The ID of the form element
 * @param {string} messageId - The ID of the message display element
 * @param {Object} customMessages - Custom message overrides
 * @param {string} locale - The locale ('en' or 'ar')
 */
export function initContactForm(formId, messageId, customMessages = {}, locale = 'en') {
  const form = document.getElementById(formId);
  const messageEl = document.getElementById(messageId);

  if (!form) {
    console.warn(`Form with ID "${formId}" not found.`);
    return;
  }

  const messages = {
    sending: locale === 'ar'
      ? 'جاري إرسال الرسالة...'
      : locale === 'de'
        ? 'Ihre Nachricht wird gesendet...'
        : 'Sending your message...',
    success: locale === 'ar'
      ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
      : locale === 'de'
        ? 'Ihre Nachricht wurde erfolgreich gesendet! Wir melden uns bald bei Ihnen.'
        : 'Your message has been sent successfully! We will get back to you soon.',
    error: locale === 'ar'
      ? 'عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.'
      : locale === 'de'
        ? 'Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
        : 'Sorry, an error occurred while sending your message. Please try again.',
    ...customMessages
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous errors
    clearFieldErrors(formId);

    // Collect form data
    const data = {
      name: form.querySelector('#name')?.value || '',
      email: form.querySelector('#email')?.value || '',
      phone: form.querySelector('#phone')?.value || '',
      company: form.querySelector('#company')?.value || '',
      service: form.querySelector('#service')?.value || '',
      message: form.querySelector('#message')?.value || ''
    };

    // Validate form
    const validationErrors = validateForm(data, locale);
    if (validationErrors) {
      // Show field-level errors
      if (validationErrors.name) showFieldError('name', validationErrors.name, locale);
      if (validationErrors.email) showFieldError('email', validationErrors.email, locale);
      if (validationErrors.message) showFieldError('message', validationErrors.message, locale);

      // Show general error message
      if (messageEl) {
        const generalMsg = locale === 'ar'
        ? 'الرجاء تصحيح الأخطاء أدناه قبل الإرسال.'
        : locale === 'de'
          ? 'Bitte korrigieren Sie die unten stehenden Fehler, bevor Sie absenden.'
          : 'Please correct the errors below before submitting.';
        messageEl.textContent = generalMsg;
        messageEl.className = 'form-message form-message-error';
        messageEl.style.display = 'block';
      }
      return;
    }

    // Disable submit button and show sending message
    const submitBtn = form.querySelector('.submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = messages.sending;
    }

    if (messageEl) {
      messageEl.textContent = messages.sending;
      messageEl.className = 'form-message form-message-info';
      messageEl.style.display = 'block';
    }

    // Submit to Firebase
    const result = await submitToFirebase(data, locale);

    if (result.success) {
      if (messageEl) {
        messageEl.textContent = messages.success;
        messageEl.className = 'form-message form-message-success';
      }
      form.reset();
    } else {
      if (messageEl) {
        messageEl.textContent = messages.error;
        messageEl.className = 'form-message form-message-error';
      }
    }

    // Re-enable submit button
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = locale === 'ar' ? 'إرسال الرسالة' : 'Send Message';
    }
  });
}
