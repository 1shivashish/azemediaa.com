// Smooth scroll functionality
function smoothScroll(target) {
    const element = document.getElementById(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Smooth scroll for all navigation links (except external links)
document.querySelectorAll('[data-scroll]').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const target = button.getAttribute('data-scroll');
        smoothScroll(target);
        
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});

// Portfolio filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Toast notification function
function showToast(title, description) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastDescription = document.getElementById('toastDescription');
    
    toastTitle.textContent = title;
    toastDescription.textContent = description;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show success toast
    showToast('Message Sent!', "We'll get back to you within 24 hours.");
    
    // Reset form
    contactForm.reset();
    
    // In production, you would send this data to a backend API
    console.log('Contact form submitted:', { name, email, message });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get email value
    const email = newsletterForm.elements.newsletter.value;
    
    // Show success toast
    showToast('Subscribed!', "You've been added to our newsletter.");
    
    // Reset form
    newsletterForm.reset();
    
    // In production, you would send this data to a backend API
    console.log('Newsletter subscription:', { email });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('AZE.mediaa website loaded successfully');
    
    // Add smooth reveal animations for sections on scroll (optional)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
