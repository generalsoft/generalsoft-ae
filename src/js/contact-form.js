import { initContactForm } from './firebase-contact.js';

// Auto-detect locale from URL path
const path = window.location.pathname;
let locale = 'en';
if (path.startsWith('/ar/')) {
  locale = 'ar';
} else if (path.startsWith('/de/')) {
  locale = 'de';
}

initContactForm('contactForm', 'formMessage', {}, locale);