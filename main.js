
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentNode.querySelector('h3').textContent;
        const productImage = button.parentNode.querySelector('img').src; 

        
        const cartItem = document.createElement('li');
        cartItem.textContent = productName;

        
        const cartItemImage = document.createElement('img');
        cartItemImage.src = productImage;
        cartItemImage.alt = productName;
        cartItem.appendChild(cartItemImage);

        
        document.getElementById('cart-items').appendChild(cartItem);
    });
});