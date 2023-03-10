import booksCounter from './counters/booksCounter.js';
import getBooks from './getBooks.js';
import { addLike } from './involvementAPI/getLikes.js';
import renderLikes from './involvementAPI/renderLikes.js';
import popup from './popup.js';
import renderBooks from './renderBooks.js';

const booksSection = document.querySelector('.books');
const pop = document.querySelector('.pop');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', async () => {
  const books = await getBooks();
  books.results.forEach((book) => {
    renderBooks(book);
  });
  renderLikes();
  document.querySelector('.main-books-counter').textContent = `(${booksCounter()})`;
  const btn = document.querySelectorAll('.comment-btn');
  popup(btn, books.results);
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

pop.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    pop.classList.add('inactive');
    body.classList.remove('noflow');
  }
});