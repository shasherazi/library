const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const id = 'od3GdNureT5rfbsZ7PgU';

const getLikes = async () => {
  const response = await fetch(`${url}apps/${id}/likes/`);
  return response.json();
};

const addLike = async (bookId) => {
  const response = await fetch(`${url}apps/${id}/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: bookId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

export { getLikes, addLike };