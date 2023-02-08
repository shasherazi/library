import getBooks from './getBooks.js';
import popup from './popup.js';
import renderBooks from './renderBooks.js';

document.addEventListener('DOMContentLoaded', async () => {
  const books = await getBooks();
  books.results.forEach((book) => {
    renderBooks(book);
  });
  const btn = document.querySelectorAll('.comment-btn');
  popup(btn);
});
