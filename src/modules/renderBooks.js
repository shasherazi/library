const bookSection = document.querySelector('.books');

const renderBooks = (book) => {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book-div');
  bookDiv.innerHTML = `
        <p class="book-id hidden">${book.id}</p>
        <img src="${book.formats['image/jpeg']}" alt="${book.title}">
        <h2 class="book-title">${book.title}</h2>
        <p class="book-author">${book.authors.length === 0 ? 'N/A' : book.authors[0].name}</p>
        <div class="like-and-comment">
            <button class="comment-btn">
                <a href="#pop-up">
                  Comment <i class="fa-solid fa-comments"></i>
                </a>
            </button>
            <div class="like-container">
                <i class="fa-regular fa-heart empty like-btn"></i>
                <i class="fa-solid fa-heart filled hidden like-btn"></i>
                <p class="likes">0</p>
            </div>
        </div>
    `;
  bookSection.appendChild(bookDiv);
};
export default renderBooks;