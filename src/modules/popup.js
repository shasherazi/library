import addcomment from './involvementAPI/addcomment.js';
import getcomment from './involvementAPI/getcomment.js';
import rendercomments from './rendercomments.js';

const body = document.querySelector('body');
const pop = document.querySelector('.pop');

export default (button, books) => {
  button.forEach((btn) => {
    btn.addEventListener('click', async () => {
      body.classList.add('noflow');
      pop.innerHTML = '';
      pop.classList.remove('inactive');
      const par = btn.parentElement.parentElement;
      const title = par.querySelector('.book-title').innerHTML;
      const currBook = books.filter((book) => book.title === title);
      const fillcoms = await getcomment(currBook[0].id);
      const closebtn = document.createElement('a');
      closebtn.classList.add('closeBtn');
      closebtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      pop.appendChild(closebtn);
      const template = document.createElement('div');
      template.classList.add('container');
      template.innerHTML = `
      <div class="book-details">
        <img src="${currBook[0].formats['image/jpeg']}" alt="${currBook.title}">
        <div class="details">
            <h1>${currBook[0].title}</h1>
            <div class="description">
                <p><strong>Author:</strong> ${currBook[0].authors.length === 0 ? 'N/A' : currBook[0].authors[0].name}</p>
                <p><strong>Bookshelves:</strong> ${currBook[0].bookshelves}</p>
                <p><strong>Subjects:</strong> ${currBook[0].subjects}</p>
            </div>
        </div>
      </div>
      <div class="show-comments">
        <h1 class="comments-heading">Comments<span class="com-count">(0)</span></h1>
        <ul class="comments"></ul>
        <form class="myform">
            <h1>Add a Comment</h1>
            <input id="name" type="text" placeholder="Your name" required>
            <textarea id="areatext" cols="30" rows="5" placeholder="Insights" required></textarea>
            <button id="submit" class="comment-btn">Add Comment</button>
        </form>
      </div>`;
      pop.appendChild(template);

      // fill commments
      const mycoms = document.querySelector('.comments');
      rendercomments(fillcoms, mycoms);

      // Display No of Comments
      const count = document.querySelector('.com-count');
      if (fillcoms.length > 0) {
        count.innerHTML = `(${fillcoms.length})`;
      } else {
        count.innerHTML = '(0)';
      }

      // add comment
      const comBtn = document.querySelector('#submit');
      const inp = document.querySelector('#name');
      const text = document.querySelector('#areatext');
      addcomment(comBtn, inp, text, currBook[0].id);

      // close pop up
      const close = document.querySelector('.closeBtn > i');
      close.addEventListener('click', () => {
        pop.classList.add('inactive');
        body.classList.remove('noflow');
      });
    });
  });
};