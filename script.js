// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    const cartCountElement = document.getElementById('cart-count');
    const buttons = document.querySelectorAll('.add-to-cart');
    let count = 0;

    // Handle Add to Cart Clicks
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            count++;
            cartCountElement.innerText = count;
            
            // Visual feedback
            button.innerText = "Added! ✓";
            button.style.backgroundColor = "#10b981"; // Change to green
            
            setTimeout(() => {
                button.innerText = "Add to Cart";
                button.style.backgroundColor = ""; // Reset
            }, 1000);
        });
    });

    // Smooth Scroll for "Explore Now" button
    document.querySelector('.btn-primary').addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector('#shop');
        target.scrollIntoView({ behavior: 'smooth' });
    });
});