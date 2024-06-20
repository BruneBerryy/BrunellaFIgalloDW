const container_menuItems = document.getElementById('container_menuItems');
const counter_cart = document.getElementById('counter_cart');

const cart = [];

// Asegúrate de que `menuItems` está definida solo una vez, probablemente en `data/data.js`
getMenuItems();

function getMenuItems() {
    menuItems.forEach(item => {
        console.log(item);
        const content_menuItem = document.createElement('div');
        content_menuItem.innerHTML = `
            <h1>${item.name}</h1>
            <img src="${item.image_url}" alt="${item.name}">
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
            <button class="btn_carts" value="${item.id}">Comprar</button>
        `;
        container_menuItems.appendChild(content_menuItem);
    });
    addEventListenersToButtons();
}

function addEventListenersToButtons() {
    const buttons = document.querySelectorAll('.btn_carts');
    buttons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function addToCart(event) {
    const menuItemsId = event.target.value;

    if (menuItemsId) {
        cart.push(menuItemsId);
        updateCartCounter();
        console.log('Item added to cart:', menuItemsId);
        console.log('Cart:', cart);
    }
}

function updateCartCounter() {
    counter_cart.innerText = cart.length;
}