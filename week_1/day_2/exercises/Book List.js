// 1. Create the array of book objects
const allBooks = [
    {
        title: "Le Sahara Marrocain",
        author: "Hubert Seillan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjGT1P4_jx1CQmYzzPB1eXDpZhf1bj3NVFQ&s",
        alreadyRead: true
    },
    {
        title: "Philosophie et Historique",
        author: "Abdellah ElAroui",
        image: "https://bookslibrary.com/files/s-books-library.com-08172314Oh5F3.jpg",
        alreadyRead: false
    }
];


const bookSection = document.querySelector(".listBooks");


allBooks.forEach(book => {
    // Create a div for each book
    const bookDiv = document.createElement("div");

    // Create the text (Title and Author)
    const bookInfo = document.createElement("p");
    bookInfo.textContent = `${book.title} written by ${book.author}`;

    // Create the image element
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.style.width = "100px"; // Requirement: width 100px

    // Requirement: If alreadyRead is true, set text color to red
    if (book.alreadyRead) {
        bookInfo.style.color = "red";
    }

   
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(bookImage);
    
    // Add the book div to the section
    bookSection.appendChild(bookDiv);
});