import getBooks from './getBooks.js';
import renderLikes from './involvementAPI/renderLikes.js';
import renderBooks from './renderBooks.js';

document.addEventListener('DOMContentLoaded', async () => {
  const books = await getBooks();
  books.results.forEach((book) => {
    renderBooks(book);
    renderLikes();
  });
});
