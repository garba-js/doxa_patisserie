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

// Dynamic Product Rendering on product.html with unique WhatsApp Business cart links
const products = [
    {
        name: "Cookies",
        price: 500,
        description: "Soft, buttery, irresistible.",
        img: "images/cookie.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Cookies" // Replace with real catalog/cart URL
    },
    {
        name: "Signature Cake",
        price: 10500,
        description: "1 Bento 2 Cupcake",
        img: "images/signature_cake.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Signature%20Cake"
    },
    {
        name: "Fondant Cake",
        price: 48999,
        description: "3 layer size 8",
        img: "images/product1.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Fondant%20Cake"
    },
    {
        name: "Plain Cake",
        price: 9900,
        description: "1 layer size 8",
        img: "images/product2.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Plain%20Cake"
    },
    {
        name: "Butter Cream Cake",
        price: 12900,
        description: "1 layer size 6",
        img: "images/product3.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Butter%20Cream%20Cake"
    },
    {
        name: "Whipped Cream Cake",
        price: 20900,
        description: "2 layer size 6",
        img: "images/product4.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Whipped%20Cream%20Cake"
    },
    {
        name: "Whipped Cream Large",
        price: 35500,
        description: "2 layer size 8",
        img: "images/product5.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Whipped%20Cream%20Large"
    },
    {
        name: "Butter Cream Mini",
        price: 10000,
        description: "2 layer size 4",
        img: "images/product6.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Butter%20Cream%20Mini"
    },
    {
        name: "Bento Cake Premium",
        price: 6700,
        description: "1 layer size 4",
        img: "images/product7.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Bento%20Cake%20Premium"
    },
    {
        name: "Bento Cake Plain",
        price: 5000,
        description: "Plain size 4",
        img: "images/product8.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Bento%20Cake%20Plain"
    },
    {
        name: "Cupcakes Deal",
        price: 2500,
        description: "Per Box",
        img: "images/cupcake.webp",
        whatsappCartUrl: "https://wa.me/2348012345678?text=I%20want%20to%20order%20Cupcakes%20Deal"
    }
];

const productContainer = document.querySelector('.highlight');

if (productContainer && window.location.href.includes("product.html")) {
    displayProducts(products);
}

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
