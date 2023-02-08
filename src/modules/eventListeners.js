import booksCounter from './counters/booksCounter.js';
import getBooks from './getBooks.js';
import { addLike } from './involvementAPI/getLikes.js';
import renderLikes from './involvementAPI/renderLikes.js';
import renderBooks from './renderBooks.js';

const booksSection = document.querySelector('.books');

document.addEventListener('DOMContentLoaded', async () => {
  const books = await getBooks();
  books.results.forEach((book) => {
    renderBooks(book);
  });
  renderLikes();
  document.querySelector('.main-books-counter').textContent = `(${booksCounter()})`;
});

booksSection.addEventListener('click', async (e) => {
  if (e.target.closest('.like-container')) {
    const bookId = e.target.closest('.book-div').querySelector('.book-id').textContent;
    e.target.closest('.like-container').querySelector('.empty').classList.add('hidden');
    e.target.closest('.like-container').querySelector('.filled').classList.remove('hidden');
    await addLike(bookId);
    renderLikes();
  }
});