import getBooks from './getBooks.js';
import renderBooks from './renderBooks.js';

document.addEventListener('DOMContentLoaded', async () => {
  const books = await getBooks();
  books.results.forEach((book) => {
    renderBooks(book);
  });
});
