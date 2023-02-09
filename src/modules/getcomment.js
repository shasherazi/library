const comments = async (bookId) => {
  bookId = bookId.toString();
  const coms = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/od3GdNureT5rfbsZ7PgU/comments?item_id=${bookId}`);
  const res = coms.json();
  return res;
};
export default comments;