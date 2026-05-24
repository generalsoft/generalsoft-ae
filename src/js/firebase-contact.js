// Contact form submission handler using Firebase Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from './firebase-config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Submit contact form data to Firestore
 * @param {Object} formData - The form data object
 * @param {string} formData.name - Full name
 * @param {string} formData.email - Email address
 * @param {string} [formData.phone] - Phone number
 * @param {string} [formData.company] - Company name
 * @param {string} [formData.service] - Service required
 * @param {string} formData.message - Message
 * @param {string} [locale] - Language locale ('en' or 'ar')
 * @returns {Promise<Object>} Result object with success/error info
 */
export async function submitContactForm(formData, locale = 'en') {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      company: formData.company || '',
      service: formData.service || '',
      message: formData.message,
      locale: locale,
      createdAt: serverTimestamp(),
      read: false,
    });

    console.log('Contact form submitted successfully. ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Set up the contact form with Firebase submission
 * @param {string} formId - The ID of the form element
 * @param {string} messageContainerId - The ID of the message display container
 * @param {Object} messages - Custom messages object
 * @param {string} [messages.sending] - Message shown while submitting
 * @param {string} [messages.success] - Message shown on success
 * @param {string} [messages.error] - Message shown on error
 * @param {string} [locale] - Language locale
 */
export function initContactForm(formId, messageContainerId, messages = {}, locale = 'en') {
  const form = document.getElementById(formId);
  const messageContainer = document.getElementById(messageContainerId);

  if (!form) {
    console.warn(`Form with ID "${formId}" not found.`);
    return;
  }

  const defaultMessages = {
    sending: locale === 'ar' ? 'جاري إرسال الرسالة...' : 'Sending your message...',
    success: locale === 'ar' ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : 'Your message has been sent successfully! We will get back to you soon.',
    error: locale === 'ar' ? 'عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.' : 'Sorry, an error occurred while sending your message. Please try again.',
  };

  const mergedMessages = { ...defaultMessages, ...messages };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable submit button and show sending state
    const submitBtn = form.querySelector('.submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = mergedMessages.sending;
    }

    // Show sending message
    if (messageContainer) {
      messageContainer.textContent = mergedMessages.sending;
      messageContainer.className = 'form-message form-message-info';
      messageContainer.style.display = 'block';
    }

    // Gather form data
    const formData = {
      name: form.querySelector('#name')?.value || '',
      email: form.querySelector('#email')?.value || '',
      phone: form.querySelector('#phone')?.value || '',
      company: form.querySelector('#company')?.value || '',
      service: form.querySelector('#service')?.value || '',
      message: form.querySelector('#message')?.value || '',
    };

    // Submit to Firebase
    const result = await submitContactForm(formData, locale);

    if (result.success) {
      if (messageContainer) {
        messageContainer.textContent = mergedMessages.success;
        messageContainer.className = 'form-message form-message-success';
      }
      form.reset();
    } else {
      if (messageContainer) {
        messageContainer.textContent = mergedMessages.error;
        messageContainer.className = 'form-message form-message-error';
      }
    }

    // Re-enable submit button
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = locale === 'ar' ? 'إرسال الرسالة' : 'Send Message';
    }
  });
}
