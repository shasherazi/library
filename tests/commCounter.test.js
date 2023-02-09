import commentCounter from '../src/modules/counters/commentCounter.js';

describe('commentCounter', () => {
  beforeEach(() => {
    document.body.innerHTML = '<li class="com-item"></li>';
  });

  test('should return the correct number of comments', () => {
    expect(commentCounter()).toBe(1);
  });

  test('should return 0 if there are no comments', () => {
    document.body.innerHTML = '';
    expect(commentCounter()).toBe(0);
  });

  test('returns the correct count after some comments are added or removed', () => {
    const commItem = document.createElement('li');
    commItem.classList.add('com-item');
    document.body.appendChild(commItem);
    expect(commentCounter()).toBe(2);

    document.querySelector('.com-item').remove();
    const newCount = commentCounter();
    expect(newCount).toBe(1);
  });
});