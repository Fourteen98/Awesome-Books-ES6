import LocalStorage from './local_storage.js';

const localS = new LocalStorage();

const bookContainer = document.querySelector('.book-list');

class CreateUI {
  getUI(localStorage) {
    this.books = localStorage.getLocalStorage();
    let counter = 0;
    while (counter < this.books.length) {
      this.addToUI(this.books[counter]);
      counter += 1;
    }
  }

  addToUI(book) {
    const list = document.createElement('div');
    list.classList.add('single-book');

    const info = document.createElement('div');
    info.classList.add('info');
    list.appendChild(info);

    const bookID = document.createElement('h3');
    bookID.textContent = book.id;
    bookID.classList.add('book-id');
    info.appendChild(bookID);

    const title = document.createElement('h3');
    title.textContent = book.title;
    title.classList.add('title');
    info.appendChild(title);

    const by = document.createElement('h3');
    by.textContent = 'by';
    info.appendChild(by);

    const author = document.createElement('h3');
    author.textContent = (book.author);
    author.classList.add('author');
    info.appendChild(author);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('type', 'button');
    list.appendChild(removeBtn);

    list.addEventListener('click', (e) => {
      this.remove(e.target);
      localS.removeBookFromStorage(e.target.parentElement.firstChild.firstChild.textContent);
    });

    // adding book to ul
    bookContainer.append(list);
  }

  // eslint-disable-next-line class-methods-use-this
  remove(t) {
    if (t.classList.contains('remove-btn')) {
      t.parentElement.remove();
    }
  }
}

export default CreateUI;
