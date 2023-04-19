import BookList from '../modules/update-booklist.js';

import {
  showBookList,
  showAddBook,
  showContact,
} from '../modules/navigation.js';

import DateDisplay from '../modules/date.js';

// eslint-disable-next-line no-unused-vars
const bookList = new BookList('.book-lists', '#form', 'bookLists');

const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

listLink.addEventListener('click', showBookList);
addLink.addEventListener('click', showAddBook);
contactLink.addEventListener('click', showContact);

const showDate = new DateDisplay('.date-text');
showDate.displayDate();
