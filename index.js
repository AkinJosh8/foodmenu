// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll to Top logic
    const scrollBtn = document.getElementById('scrollToTop');
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Simple interaction for buttons
    const primaryBtn = document.querySelector('.btn-primary');
    primaryBtn.addEventListener('click', () => {
        alert('Redirecting to Menu...');
    });

});