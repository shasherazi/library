const comments = async () => {
  const coms = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/od3GdNureT5rfbsZ7PgU/comments?item_id=item1');
  const res = coms.json();
  return res;
};
export default comments;