const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

class LocalStorage {
  // eslint-disable-next-line class-methods-use-this
  getLocalStorage() {
    let books;
    if (localStorage.getItem('books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  setStorage(book) {
    const books = this.getLocalStorage();
    books.push(book);
    bookTitle.value = '';
    bookAuthor.value = '';
    localStorage.setItem('books', JSON.stringify(books));
  }

  removeBookFromStorage(id) {
    const books = this.getLocalStorage();
    books.forEach((book, index) => {
      if (book.id === Number(id)) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  setAfterWindowsLoad() {
    const book = this.getLocalStorage();
    bookTitle.value = book[book.length - 1].title;
    bookAuthor.value = book[book.length - 1].author;
  }
}

export default LocalStorage;
