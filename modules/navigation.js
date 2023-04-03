const lists = document.getElementById('lists');
const addBooks = document.getElementById('add-books');
const contact = document.getElementById('contact');

const showBookList = () => {
  window.location.reload();
  addBooks.style.display = 'none';
  contact.style.display = 'none';
  lists.style.display = 'block';
};

const showAddBook = () => {
  lists.style.display = 'none';
  contact.style.display = 'none';
  addBooks.style.display = 'block';
};

const showContact = () => {
  addBooks.style.display = 'none';
  lists.style.display = 'none';
  contact.style.display = 'block';
};

export { showBookList, showAddBook, showContact };
