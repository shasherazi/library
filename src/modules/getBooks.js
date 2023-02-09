const url = 'https://gutendex.com/';
const booksEndpoint = 'books/';
const booksRange = '20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35';

const getBooks = async () => {
  const response = await fetch(`${url}${booksEndpoint}?ids=${booksRange}`);
  const data = await response.json();
  return data;
};

export default getBooks;