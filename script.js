const myLibrary = [];
let newTitle = "";
let newAuthor = "";
let newPages = "";
let newRead = "";

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function addBookToLibrary() {
    let newBook = new Book(newTitle, newAuthor, newPages, newRead)
    myLibrary.push(newBook);
};

function displayLibrary() {

}




// Modal Code

const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#new-book");
const span = document.querySelector(".close");


modalBtn.onclick = () => {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form Code

const bookName = document.querySelector("#book-name");
const authorName = document.querySelector("#author-name");
const maxPages = document.querySelector("#max-pages");
const readBoolean = document.querySelector("#read-boolean");
const submitButton = document.querySelector("#submit");

submitButton.onclick = (event) => {
    newTitle = bookName.value
    newAuthor = authorName.value
    newPages = maxPages.value
    newRead = readBoolean.checked
    addBookToLibrary()
    console.log(myLibrary);
    modal.style.display = "none";
    event.preventDefault()
};
