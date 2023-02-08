import addcomment from './addcomment.js';
import getcomment from './getcomment.js';

const body = document.querySelector('body');
const pop = document.querySelector('.pop');

export default (button) => {
  body.classList.add('noflow');
  button.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const fillcoms = await getcomment();
      pop.innerHTML = '';
      pop.classList.remove('inactive');
      const par = btn.parentElement.parentElement;
      const img = par.querySelector('img').src;
      const title = par.querySelector('.book-title').innerHTML;
      const author = par.querySelector('.book-author').innerHTML;

      const closebtn = document.createElement('a');
      closebtn.classList.add('closeBtn');
      closebtn.innerHTML = '<i class="fa-regular fa-rectangle-xmark"></i>';
      pop.appendChild(closebtn);
      const template = document.createElement('div');
      template.classList.add('container');
      template.innerHTML = `
      <div class="book-details">
        <img src=${img} alt="book-img">
        <div class="details">
            <h1>${title}</h1>
            <div class="description">
                <p>${author}</p>
                <p>date</p>
                <p>category</p>
                <p>stuff</p>
            </div>
        </div>
      </div>
      <div class="show-comments">
        <ul class="comments"></ul>
        <form class="myform">
            <h1>Add a Comment</h1>
            <input id="name" type="text" placeholder="Your name" required>
            <textarea id="areatext" cols="30" rows="10" placeholder="Insights" required></textarea>
            <button id="submit">Add Comment</button>
        </form>
      </div>`;
      pop.appendChild(template);

      const mycoms = document.querySelector('.comments');
      mycoms.innerHTML = '<h1>Comments <span class="com-count">(0)</span></h1>';
      fillcoms.forEach((com) => {
        const link = document.createElement('li');
        link.classList.add('com-item');
        link.innerHTML = `${com.creation_date} ${com.username} : ${com.comment}`;
        mycoms.appendChild(link);
      });

      const count = document.querySelector('.com-count');
      count.innerHTML = `(${fillcoms.length})`;
      const comBtn = document.querySelector('#submit');
      const inp = document.querySelector('#name');
      const text = document.querySelector('#areatext');
      addcomment(comBtn, inp, text);

      const close = document.querySelector('.closeBtn > i');
      close.addEventListener('click', () => {
        pop.classList.add('inactive');
        body.classList.remove('noflow');
      });
    });
  });
};