// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.padding = '0.5rem 0';
    } else {
        header.style.padding = '1rem 0';
    }
    
    lastScroll = currentScroll;
});

// Animate service cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Animate service sections on scroll
document.querySelectorAll('.service-section').forEach(section => {
    observer.observe(section);
});

// Dropdown menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    // Create arrow element
    const arrow = document.createElement('span');
    arrow.className = 'dropdown-arrow';
    arrow.textContent = '▼';
    dropbtn.appendChild(arrow);
    
    // Toggle dropdown on click
    dropbtn.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownContent.classList.toggle('show');
        arrow.classList.toggle('rotate');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
            arrow.classList.remove('rotate');
        }
    });
    
    // Prevent closing when clicking inside dropdown
    dropdownContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});