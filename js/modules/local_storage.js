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
    console.log(books);
  }
}

export default LocalStorage;