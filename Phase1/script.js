// Sample product data
const products = [
    { name: "Laptop", category: "Electronics", price: 999 },
    { name: "Smartphone", category: "Electronics", price: 499 },
    { name: "Headphones", category: "Electronics", price: 199 },
    { name: "T-shirt", category: "Clothing", price: 29 },
    { name: "Jeans", category: "Clothing", price: 59 },
    { name: "Sweater", category: "Clothing", price: 39 },
    { name: "Coffee Maker", category: "Home", price: 79 },
    { name: "Blender", category: "Home", price: 49 },
    { name: "Table Lamp", category: "Home", price: 39 },
];

// Function to display products
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous items

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

// Filter function
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Event listeners for filter buttons
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProducts(category);
    });
});

displayProducts(products);
