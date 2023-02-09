import { getLikes } from './getLikes.js';

const renderLikes = async () => {
  const likes = await getLikes();
  const likesContainer = document.querySelectorAll('.likes');
  likesContainer.forEach((like) => {
    const bookId = like.parentElement.parentElement.parentElement.firstElementChild.textContent;
    const bookLikes = likes.filter((item) => parseInt(item.item_id, 10) === parseInt(bookId, 10));
    like.textContent = bookLikes.length === 0 ? 0 : bookLikes[0].likes;
  });
};

export default renderLikes;