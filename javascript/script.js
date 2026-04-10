let cart = [];

function addToCart(isbn, title, price)
{
    const book = {isbn: isbn, title: title, price: price, quantity: 1};
    cart.push(book);
    alert(title + "Added to cart!");
}