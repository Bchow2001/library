const myLibrary = [];
const newTitle = "";
const newAuthor = "";
const newPages = "";
const newRead = "";
const addBook = document.querySelector("#new-book");

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
};

function addBooktoLibrary() {
    const newbook = new Book(newTitle, newAuthor, newPages, newRead)
    myLibrary.push(newbook);
};

function displayLibrary() {

}

addBook.addEventListener