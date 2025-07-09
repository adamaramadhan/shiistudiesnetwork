// Mobile Navigation
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const nav = document.querySelector('.nav');
const header = document.getElementById('header');

// Toggle mobile menu
mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Hide header on scroll for mobile
let lastScrollTop = 0;
let ticking = false;

function updateHeaderVisibility() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (window.innerWidth <= 768) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.classList.add('hidden');
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
    } else {
        // Desktop - always show header
        header.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateHeaderVisibility);
        ticking = true;
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        header.classList.remove('hidden');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});
