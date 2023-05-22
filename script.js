const myLibrary = [];
let newTitle = "";
let newAuthor = "";
let newPages = "";
let newRead = "";
const container = document.querySelector(".card-container");

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function addBookToLibrary() {
    const newBook = new Book(newTitle, newAuthor, newPages, newRead)
    myLibrary.push(newBook);
};

function isRead(readVal) {
    return (readVal ? "Read" : "Not Read");
};

function displayLibrary() {
    container.innerHTML = ""
    myLibrary.forEach((item) => {
        // creates new div for all items in card
        const newCard = document.createElement("div")
        const titleDiv = document.createElement("div")
        const byDiv = document.createElement("div")
        const authorDiv = document.createElement("div")
        const pagesDiv = document.createElement("div")
        const readButton = document.createElement("button")
        const removeButton = document.createElement("button")
        const bookIndex = myLibrary.indexOf(item)
        // sets class and data-keys of div
        newCard.setAttribute("class", "card")
        removeButton.setAttribute("data-key", bookIndex)
        readButton.setAttribute("data-key", bookIndex)
        // adds content to div
        titleDiv.textContent = item.title
        byDiv.textContent = "by"
        authorDiv.textContent = item.author
        pagesDiv.textContent = `Pages: ${item.pages}`
        readButton.textContent = `${isRead(item.read)}`
        removeButton.textContent = "Remove"
        // adds event listener to read button
        readButton.addEventListener("click", (e) => {
            const readIndex = e.target.dataset.key
            // console.log(myLibrary[readIndex])
            myLibrary[readIndex].read = !myLibrary[readIndex].read
            displayLibrary();
        })
        // adds event listener to remove button
        removeButton.addEventListener("click", (e) => {
            const removeIndex = e.target.dataset.key
            myLibrary.splice(removeIndex, 1)
            displayLibrary()
        })
        // appends div to card
        newCard.appendChild(titleDiv)
        newCard.appendChild(byDiv)
        newCard.appendChild(authorDiv)
        newCard.appendChild(pagesDiv)
        newCard.appendChild(readButton)
        newCard.appendChild(removeButton)
        // adds class to child div
        const newCardChildren = newCard.childNodes
        newCardChildren.forEach((item) => {
            item.setAttribute("class", "card-child");
        })
        removeButton.setAttribute("class", "remove-button")
        readButton.setAttribute("class", "read-button")
        // add toggle to read button
        if (readButton.textContent === "Not Read") {
            readButton.classList.toggle("unread-button");
        }
        // adds card to the DOM
        container.appendChild(newCard);
});
};




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

const form = document.querySelector(".modal-form")
const bookName = document.querySelector("#book-name");
const authorName = document.querySelector("#author-name");
const maxPages = document.querySelector("#max-pages");
const readBoolean = document.querySelector("#read-boolean");
const submitButton = document.querySelector("#submit");

submitButton.onclick = (event) => {
    if (form.checkValidity() === true) {
        newTitle = bookName.value
        newAuthor = authorName.value
        newPages = maxPages.value
        newRead = readBoolean.checked
        addBookToLibrary()
        modal.style.display = "none"
        event.preventDefault()
        form.reset()
        displayLibrary();
}};