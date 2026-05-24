// Contact form handling with FormSubmit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    const submitBtn = this.querySelector('.submit-btn');
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Get form data
    const formData = new FormData(this);
    
    // Send to FormSubmit
    fetch('https://formsubmit.co/9a7f07b21b85b9f8680835f2768181a7', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
            formMessage.className = 'form-message success';
            this.reset();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        formMessage.textContent = 'Oops! Something went wrong. Please email us directly at info@generalsoft.ae';
        formMessage.className = 'form-message error';
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
});