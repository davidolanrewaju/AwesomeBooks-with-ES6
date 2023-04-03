import BookList from './modules/update-booklist.js';

import {
  showBookList,
  showAddBook,
  showContact,
} from './modules/navigation.js';

import DateDisplay from './modules/date.js';

const bookList = new BookList(".book-lists", "#form", "bookLists"); // eslint-disable-line

const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

listLink.addEventListener('click', showBookList);
addLink.addEventListener('click', showAddBook);
contactLink.addEventListener('click', showContact);

const showDate = new DateDisplay('.date-text');
showDate.displayDate();
