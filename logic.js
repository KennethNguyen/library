let myLibrary = [];

// constructor
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


var new_title = document.querySelector('#title');
var new_author = document.querySelector('#author');
var new_page = document.querySelector('#page');
var new_read = document.querySelector('select');

const button = document.querySelector('button');
button.addEventListener('click', function() {
    let new_book = new Book(new_title.value, new_author.value, new_page.value, new_read.value);
    addBookToLibrary(new_book);
});
