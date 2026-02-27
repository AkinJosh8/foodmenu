//For search box
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const searchBox = document.querySelector('.search-box');

    // Highlight search box on focus
    searchInput.addEventListener('focus', () => {
        searchBox.style.border = '2px solid var(--primary-orange)';
        searchBox.style.transform = 'scale(1.02)';
        searchBox.style.transition = 'all 0.3s ease';
    });

    searchInput.addEventListener('blur', () => {
        searchBox.style.border = 'none';
        searchBox.style.transform = 'scale(1)';
    });
});

//For add to cart button
document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.btn-add');
    let cartCount = 0;

    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const foodName = e.target.closest('.food-card').querySelector('h3').innerText;
            
            cartCount++;
            // Visual feedback
            button.innerText = "Added!";
            button.style.backgroundColor = "#2F855A"; // Green for success

            // Reset button after 1.5 seconds
            setTimeout(() => {
                button.innerText = "Add to cart";
                button.style.backgroundColor = "#FF8225";
            }, 1500);
        });
    });
});

//For hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the links
        navLinks.classList.toggle('active');
        
        // Optional: Animate hamburger into an 'X'
        menuToggle.classList.toggle('is-active');
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});