export default (button, username, sc) => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const uname = username.value.trim();
    const points = sc.value.trim();
    if (uname && points) {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/od3GdNureT5rfbsZ7PgU/comments/', {
        method: 'POST',
        body: JSON.stringify({
          item_id: 'item1',
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