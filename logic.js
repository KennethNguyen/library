let myLibrary = [];

// constructor for Book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// display book object info to HTML
function render(book) {
    var new_div = document.createElement("div");
    new_div.className = "bookClass";

    var current_title = document.createElement("p");
    current_title.innerHTML = book.title;
    new_div.appendChild(current_title);

    var current_author = document.createElement("p");
    current_author.innerHTML = book.author;
    new_div.appendChild(current_author);

    var current_pages = document.createElement("p");
    current_pages.innerHTML = book.pages;
    new_div.appendChild(current_pages);

    var current_read = document.createElement("p");
    current_read.innerHTML = book.read;
    new_div.appendChild(current_read);

    display_library.appendChild(new_div);
}

// clears all current books in library since submit button renders each book
// in library again so we do not want any duplicates
function resetLibrary(library) {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
}

var display_library = document.querySelector(".library");
var new_title = document.querySelector("#title");
var new_author = document.querySelector("#author");
var new_pages = document.querySelector("#page");
var new_read = document.querySelector("select");
var inputs = document.querySelectorAll("input");
const submit_book = document.querySelector("#submitBook");

// onclick event to submit a new book to the library
submit_book.addEventListener('click', function() {
    let new_book = new Book(new_title.value, new_author.value, new_pages.value, new_read.value);
    resetLibrary(display_library);
    addBookToLibrary(new_book);
    myLibrary.forEach(render);
    //inputs.forEach(inputs => inputs.value = "");
});


// opening and closing the form to add a new book
function openForm() {
    document.getElementById("displayForm").style.display = "block";
}

function closeForm() {
    document.getElementById("displayForm").style.display = "none";
}

(document.querySelector("#addBook")).addEventListener('click', openForm);
(document.querySelector("#closeForm")).addEventListener('click', closeForm);
