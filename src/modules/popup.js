import addcomment from './addcomment.js';
import getcomment from './getcomment.js';

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
      closebtn.innerHTML = '<i class="fa-regular fa-rectangle-xmark"></i>';
      pop.appendChild(closebtn);
      const template = document.createElement('div');
      template.classList.add('container');
      template.innerHTML = `
      <div class="book-details">
        <img src="${currBook[0].formats['image/jpeg']}" alt="${currBook.title}">
        <div class="details">
            <h1>${currBook[0].title}</h1>
            <div class="description">
                <p>${currBook[0].authors.length === 0 ? 'N/A' : currBook[0].authors[0].name}</p>
                <p>${currBook[0].bookshelves}</p>
                <p>${currBook[0].subjects}</p>
            </div>
        </div>
      </div>
      <div class="show-comments">
        <ul class="comments"></ul>
        <form class="myform">
            <h1>Add a Comment</h1>
            <input id="name" type="text" placeholder="Your name" required>
            <textarea id="areatext" cols="30" rows="5" placeholder="Insights" required></textarea>
            <button id="submit">Add Comment</button>
        </form>
      </div>`;
      pop.appendChild(template);

      const mycoms = document.querySelector('.comments');
      mycoms.innerHTML = '<h1>Comments <span class="com-count">(0)</span></h1>';
      if (fillcoms.length > 0) {
        fillcoms.forEach((com) => {
          const link = document.createElement('li');
          link.classList.add('com-item');
          link.innerHTML = `${com.creation_date} ${com.username} : ${com.comment}`;
          mycoms.appendChild(link);
        });
      }

      const count = document.querySelector('.com-count');
      if (fillcoms.length > 0) {
        count.innerHTML = `(${fillcoms.length})`;
      } else {
        count.innerHTML = '(0)';
      }
      const comBtn = document.querySelector('#submit');
      const inp = document.querySelector('#name');
      const text = document.querySelector('#areatext');
      addcomment(comBtn, inp, text, currBook[0].id);

      const close = document.querySelector('.closeBtn > i');
      close.addEventListener('click', () => {
        pop.classList.add('inactive');
        body.classList.remove('noflow');
      });
    });
  });
};