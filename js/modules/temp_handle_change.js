const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

export const handleChange = () => {
  const temp = {
    title: bookTitle.value,
    author: bookAuthor.value,

  };
  localStorage.setItem('temp', JSON.stringify(temp));
};

export const getTempChange = () => {
  const getTemp = localStorage.getItem('temp');
  if (getTemp) {
    const tempObject = JSON.parse(getTemp);
    bookTitle.value = tempObject.title;
    bookAuthor.value = tempObject.author;
  }
};
