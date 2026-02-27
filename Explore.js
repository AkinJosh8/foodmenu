document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.category-item');

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // 1. Remove active class from all items
            categoryItems.forEach(i => i.classList.remove('active'));
            
            // 2. Add active class to clicked item
            item.classList.add('active');

            // 3. Logic to filter food items (to be implemented later)
            const selectedCategory = item.innerText;
            // console.log(`Filtering by: ${selectedCategory}`);
        });
    });
});

//Call this function whenever a "+" button is clicked
function updateNavCount() {
    const countElement = document.querySelector('.cart-count');
    // Get cart from storage
    const cart = JSON.parse(localStorage.getItem('CHUKS_CART')) || [];
    
    if (countElement) {
        // Calculate total quantity of all items
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        countElement.innerText = total;
        
        // Hide badge if cart is empty (Optional but looks cleaner)
        countElement.style.display = total > 0 ? 'flex' : 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const addBtns = document.querySelectorAll('.btn-add-circle');

    addBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Prevent event bubbling if necessary
            e.stopPropagation();

            // Simple "success" animation
            btn.style.backgroundColor = '#2F855A'; // Green
            btn.textContent = '✓';

            setTimeout(() => {
                btn.style.backgroundColor = '#FF8225'; // Back to Orange
                btn.textContent = '+';
            }, 1000);

            // Log item for debug
            const title = btn.closest('.compact-card').querySelector('h4').textContent;
            console.log(`Added to cart: ${title}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.category-item');
    
    items.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.category-item.active').classList.remove('active');
            item.classList.add('active');
            
            // Optional: Smooth scroll the clicked item into view
            item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            
            console.log(`Now showing: ${item.innerText}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.category-item');

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // 1. Handle Active Class UI
            document.querySelector('.category-item.active').classList.remove('active');
            item.classList.add('active');

            // 2. Get the target ID from the data attribute
            const targetId = item.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // 3. Smooth Scroll to the heading
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const foodImages = document.querySelectorAll('.card-img-container img');

    // Browser-native lazy loading is great, but we can add a fade-in effect
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                img.style.transition = 'opacity 0.5s ease-in';
                observer.unobserve(img);
            }
        });
    });

    foodImages.forEach(img => {
        img.style.opacity = '0'; // Start invisible
        imageObserver.observe(img);
    });
});

//Mobile responsive hamburger menu
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

