// Display Current Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// Hamburger Menu Toggle
const mainnav = document.querySelector('.harmbuger');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// Products array with WhatsApp cart/order links
const products = [
    {
        name: "Cookies",
        price: 500,
        description: "Soft, buttery, irresistible.",
        img: "images/cookie.webp",
        whatsappCartUrl: "https://wa.me/p/28857518713895370/2348133139142"
    },
    {
        name: "Signature Cake",
        price: 10500,
        description: "1 Bento 2 Cupcake",
        img: "images/signature_cake.webp",
        whatsappCartUrl: "https://wa.me/p/9394822660595027/2348133139142"
    },
    {
        name: "Fondant Cake",
        price: 48999,
        description: "3 layer size 8",
        img: "images/product1.webp",
        whatsappCartUrl: "https://wa.me/p/7743973925724195/2348133139142"
    },
    {
        name: "Plain Cake",
        price: 9900,
        description: "1 layer size 8",
        img: "images/product2.webp",
        whatsappCartUrl: "https://wa.me/p/8352817841448031/2348133139142"
    },
    {
        name: "Butter Cream Cake",
        price: 12900,
        description: "1 layer size 6",
        img: "images/product3.webp",
        whatsappCartUrl: "https://wa.me/p/9467063726705021/2348133139142"
    },
    {
        name: "Whipped Cream Cake",
        price: 20900,
        description: "2 layer size 6",
        img: "images/product4.webp",
        whatsappCartUrl: "https://wa.me/p/7743973925724195/2348133139142"
    },
    {
        name: "Whipped Cream Large",
        price: 35500,
        description: "2 layer size 8",
        img: "images/product5.webp",
        whatsappCartUrl: "https://wa.me/p/9544905088864099/2348133139142"
    },
    {
        name: "Butter Cream Mini",
        price: 10000,
        description: "2 layer size 4",
        img: "images/product6.webp",
        whatsappCartUrl: "https://wa.me/p/7743973925724195/2348133139142"
    },
    {
        name: "Bento Cake Premium",
        price: 6700,
        description: "1 layer size 4",
        img: "images/product7.webp",
        whatsappCartUrl: "https://wa.me/p/7743973925724195/2348133139142"
    },
    {
        name: "Bento Cake Plain",
        price: 5000,
        description: "Plain size 4",
        img: "images/product8.webp",
        whatsappCartUrl: "https://wa.me/p/7743973925724195/2348133139142"
    },
    {
        name: "Cupcakes Deal",
        price: 2500,
        description: "Per Box",
        img: "images/cupcake.webp",
        whatsappCartUrl: "https://wa.me/p/7743973925724195/2348133139142"
    }
];

// Find the container where products will be displayed
const productContainer = document.querySelector('.highlight');

// Detect if on homepage (index.html or root)
const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';

if (productContainer && isHomePage) {
    displayProducts(products);
}

// Function to render products dynamically
function displayProducts(productArray) {
    productContainer.innerHTML = `
        <div class="hheading">
            <h3>Your Next Favourite Cake is Here</h3>
            <p>Explore our bestselling products. Affordable, delicious, made with love.</p>
        </div>
    `;

    productArray.forEach(product => {
        const whatsappLink = product.whatsappCartUrl || '#';

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" loading="lazy" />
            <div class="description">
                <h3>${product.name}</h3>
                <p>Price: ₦${product.price.toLocaleString()}</p>
                <p>${product.description}</p>
                <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
                    View Details
                </a>
            </div>
        `;
        productContainer.appendChild(card);
    });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.log('Service Worker registration failed', err));
  });
}


let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    installBtn.style.display = 'none';
  });
});

