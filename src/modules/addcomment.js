export default (button, username, sc, bookId) => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    bookId = bookId.toString();
    const uname = username.value.trim();
    const points = sc.value.trim();
    if (uname && points) {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/od3GdNureT5rfbsZ7PgU/comments/', {
        method: 'POST',
        body: JSON.stringify({
          item_id: bookId,
          username: uname,
          comment: points,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    }
    username.value = '';
    sc.value = '';
  });
};