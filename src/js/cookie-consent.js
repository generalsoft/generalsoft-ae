const CONSENT_KEY = 'generalsoft-cookie-consent';
const banner = document.querySelector('[data-cookie-consent]');

if (banner) {
  const savedMessage = banner.querySelector('[data-consent-saved]');
  const choiceButtons = banner.querySelectorAll('[data-consent-choice]');
  let consent;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    consent = stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Unable to read cookie preferences:', error);
  }

  if (
    !consent ||
    consent.necessary !== true ||
    typeof consent.analytics !== 'boolean' ||
    typeof consent.marketing !== 'boolean'
  ) {
    banner.hidden = false;
  }

  document.querySelectorAll('[data-consent-open]').forEach((button) => {
    button.addEventListener('click', () => {
      choiceButtons.forEach((choiceButton) => {
        choiceButton.disabled = false;
      });
      if (savedMessage) savedMessage.hidden = true;
      banner.hidden = false;
      choiceButtons[0]?.focus();
    });
  });

  choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const acceptedAll = button.dataset.consentChoice === 'all';
      const preference = {
        necessary: true,
        analytics: acceptedAll,
        marketing: acceptedAll,
        updatedAt: new Date().toISOString()
      };

      try {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(preference));
      } catch (error) {
        console.error('Unable to save cookie preferences:', error);
        return;
      }

      document.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: preference }));
      choiceButtons.forEach((choiceButton) => {
        choiceButton.disabled = true;
      });
      if (savedMessage) savedMessage.hidden = false;
      window.setTimeout(() => {
        banner.hidden = true;
      }, 1200);
    });
  });
}
