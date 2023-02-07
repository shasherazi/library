import getBooks from './getBooks.js';
import { addLike } from './involvementAPI/getLikes.js';
import renderLikes from './involvementAPI/renderLikes.js';
import renderBooks from './renderBooks.js';
// import { addLike } from './involvementAPI/getLikes.js';

const booksSection = document.querySelector('.books');

document.addEventListener('DOMContentLoaded', async () => {
  const books = await getBooks();
  books.results.forEach((book) => {
    renderBooks(book);
  });
  renderLikes();
});

booksSection.addEventListener('click', (e) => {
  if (e.target.closest('.like-btn')) {
    const bookId = e.target.closest('.book-div').querySelector('.book-id').textContent;
    console.log(bookId);
    addLike(bookId);
    renderLikes();
  }
});