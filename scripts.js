// Menu Data
const menuData = {
    starters: [
        { name: 'Bruschetta', description: 'Toasted bread with tomatoes, garlic, and basil', price: '$8' },
        { name: 'Calamari', description: 'Crispy fried squid with marinara sauce', price: '$12' },
        { name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmesan', price: '$10' }
    ],
    mains: [
        { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with herbs', price: '$28' },
        { name: 'Prime Ribeye', description: '28-day aged premium beef', price: '$34' },
        { name: 'Lobster Risotto', description: 'Creamy arborio rice with fresh lobster', price: '$32' }
    ],
    desserts: [
        { name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert', price: '$9' },
        { name: 'Crème Brûlée', description: 'Vanilla custard with caramelized sugar', price: '$8' },
        { name: 'Chocolate Fondant', description: 'Warm chocolate cake with liquid center', price: '$10' }
    ],
    drinks: [
        { name: 'House Red Wine', description: 'Selected premium red wine', price: '$8' },
        { name: 'Craft Cocktails', description: 'Signature mixed drinks', price: '$12' },
        { name: 'Sparkling Water', description: 'Premium mineral water', price: '$4' }
    ]
};

// Gallery Data
const galleryImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    'https://images.unsplash.com/photo-1544025162-d76694265947',
    'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9'
];

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Initialize menu
    showMenuCategory('starters');
    populateGallery();
});

// Menu Category Switch
const menuCategories = document.querySelectorAll('.menu-category');
menuCategories.forEach(category => {
    category.addEventListener('click', function() {
        menuCategories.forEach(cat => cat.classList.remove('active'));
        this.classList.add('active');
        showMenuCategory(this.dataset.category);
    });
});

function showMenuCategory(category) {
    const menuItemsContainer = document.querySelector('.menu-items');
    const items = menuData[category];
    
    menuItemsContainer.innerHTML = '';
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item fade-in';
        itemElement.innerHTML = `
            <h3>${item.name} <span class="price">${item.price}</span></h3>
            <p>${item.description}</p>
        `;
        menuItemsContainer.appendChild(itemElement);
    });
}

// Populate Gallery
function populateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    galleryImages.forEach(imageUrl => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';
        galleryItem.innerHTML = `
            <img src="${imageUrl}" alt="Gallery Image">
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Reservation Form Handler
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            guests: document.getElementById('guests').value
        };

        // Here you would typically send this data to your server
        console.log('Reservation details:', formData);
        alert('Thank you for your reservation! We will confirm shortly.');
        this.reset();
    });
}

// Newsletter Form Handler
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send this to your server
        console.log('Newsletter signup:', email);
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});

// Scroll Animation
function reveal() {
    const reveals = document.querySelectorAll('.fade-in');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Initialize animations
reveal();
