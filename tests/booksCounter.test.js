import booksCounter from '../src/modules/counters/booksCounter.js';

describe('booksCounter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
          <div class="book-div"></div>
          <div class="book-div"></div>
          <div class="book-div"></div>
        `;
  });

  test('should return the correct number of books', () => {
    expect(booksCounter()).toBe(3);
  });

  test('should return 0 if there are no books', () => {
    document.body.innerHTML = '';
    expect(booksCounter()).toBe(0);
  });

  test('returns the correct count after some books are added or removed', () => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    document.body.appendChild(bookDiv);
    expect(booksCounter()).toBe(4);

    document.querySelector('.book-div').remove();
    const newCount = booksCounter();
    expect(newCount).toBe(3);
  });

  test(' returns the correct count even if some books have different class names', () => {
    document.body.innerHTML = `
            <div class="book-div"></div>
            <div class="book-div"></div>
            <div class="other-class"></div>
            `;
    expect(booksCounter()).toBe(2);
  });

  test('returns the correct count even if the books are inside nested elements', () => {
    document.body.innerHTML = `
            <div class="container">
                <div class="book-div"></div>
                <div class="book-div"></div>
                <div class="book-div"></div>
            </div>
            `;

    expect(booksCounter()).toBe(3);
  });

  test('returns the correct count even if the books have multiple classes', () => {
    document.body.innerHTML = `
            <div class="book-div book"></div>
            <div class="book-div special"></div>
            <div class="book-div ordinary"></div>
            `;

    expect(booksCounter()).toBe(3);
  });
});