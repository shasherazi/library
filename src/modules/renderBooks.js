const bookSection = document.querySelector('.books');

const renderBooks = (book) => {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book-div');
  bookDiv.innerHTML = `
        <img src="${book.formats['image/jpeg']}" alt="${book.title}">
        <h2 class="book-title">${book.title}</h2>
        <p class="book-author">${book.authors.length === 0 ? 'N/A' : book.authors[0].name}</p>
        <div class="like-and-comment">
            <button class="comment-btn">
                Comment <i class="fa-solid fa-comments"></i>
            </button>
            <i class="fa-regular fa-heart empty"></i>
            <i class="fa-solid fa-heart filled hidden"></i>
        </div>
    `;
  bookSection.appendChild(bookDiv);
};

export default renderBooks;