import AwesomeBooks from './modules/books.js';
import LocalStorage from './modules/local_storage.js';
import CreateUI from './modules/create_ui.js';
import CustomTime from './modules/time.js';

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const form = document.getElementById('form');

const localS = new LocalStorage();
const ui = new CreateUI();

function getVal(title, author, id) {
  return new AwesomeBooks(title, author, id);
}

// important to hold length of local  storage
let id = 0;

function getIndexInLocalStorage() {
  const books = localS.getLocalStorage();
  // eslint-disable-next-line no-undef
  return books.length;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Add new book to local storage
  localS.setStorage(getVal(bookTitle.value, bookAuthor.value, id));

  // create a new book in DOM
  ui.addToUI(getVal(bookTitle.value, bookAuthor.value, id));

  id += 1;
});

window.addEventListener('load', () => {
  CustomTime();
  // get the book list back on DOM
  ui.getUI(localS);

  // set the id var to current index value before refresh
  id = 1 + getIndexInLocalStorage();
});

// Navigation
const addBookNav = document.getElementById('add-page-btn');
const booksNav = document.getElementById('books-page-btn');
const contactNav = document.getElementById('contact-page-btn');
const addPage = document.getElementById('add-page');
const booksPage = document.getElementById('books-page');
const contactPage = document.getElementById('contact-page');

addBookNav.addEventListener('click', () => {
  addPage.classList.remove('none');
  booksPage.classList.add('none');
  contactPage.classList.add('none');
});

booksNav.addEventListener('click', () => {
  addPage.classList.add('none');
  booksPage.classList.remove('none');
  contactPage.classList.add('none');
});

contactNav.addEventListener('click', () => {
  addPage.classList.add('none');
  booksPage.classList.add('none');
  contactPage.classList.remove('none');
});
