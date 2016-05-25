'use strict';
const getBookIndex = function() {
  return $('#book-index').val();
};

const getBooks = function(){
  return $.ajax({
    url: 'http://localhost:3000/books',
    method: 'GET',
  });
};

const getSingleBook = function(){
  let bookNumber = getBookIndex();
  let singleURL = 'http://localhost:3000/books/' + bookNumber;
  return $.ajax({
    url: singleURL,
    method: 'GET',
  });
};

module.exports = {
  getBooks,
  getBookIndex,
  getSingleBook,
 };
