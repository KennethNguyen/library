// TODO: Cleanup code, Add status change option to read/unread, remove book option, CSS

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

    // current Read/Unread status of a book can be changed by clicking on it
    var current_read = document.createElement("button");
    current_read.className = "bookStatus";
    current_read.innerHTML = book.read;
    current_read.addEventListener('click', function() {
        current_read.innerHTML == "read" ? current_read.innerHTML = "unread" :
            current_read.innerHTML = "read";
    });
    new_div.appendChild(current_read);

    var delete_book = document.createElement("button");
    delete_book.className = "deleteBook";
    delete_book.innerHTML = "Remove";
    delete_book.addEventListener('click', function() {
        var book_index = myLibrary.indexOf(book);
        myLibrary.splice(book_index,1);
        new_div.parentNode.removeChild(new_div);
    });
    new_div.appendChild(delete_book);

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
    inputs.forEach(inputs => inputs.value = '');
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
