/*The home page code oncluding the slide show and the book arrays */

let slideIndex = 0;

showSlides();

function showSlides()
{
    let slides = document.getElementsByClassName("slide");
    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if(slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000);
}
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

const teamFavBooks = [
    {isbn: 9780142001745, price: 19},
    {isbn: 9781451673319, price: 17.00},
    {isbn: 9780385737951, price: 13.99}
];

teamFavBooks.forEach(book => {
    fetch(`https://openlibrary.org/isbn/${book.isbn}.json`)
        .then(res => res.json())
        .then(data => {
            document.querySelector(".team-fav-books").innerHTML += displayBook(
                data,
                book.isbn,
                book.price
            );
        });
});

const bestSeller = [
    {isbn: 9780593798430, price: 28.00},
    {isbn: 9780593135228, price: 22.00},
    {isbn: 9781682816752, price: 27.99},
];
//error here
bestSeller.forEach(book => {
    fetch(`https://openlibrary.org/isbn/${book.isbn}.json`)
        .then(res => res.json())
        .then(data => {
            document.querySelector(".best-seller").innerHTML += displayBook(
                data,
                book.isbn,
                book.price
            );
        });
});