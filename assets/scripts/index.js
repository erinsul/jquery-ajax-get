'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');


const getBooksHandler = function(event){
  event.preventDefault();
  let bookIndex = libraryApi.getBookIndex();
  if(bookIndex){
    libraryApi.getSingleBook()
    .done(ui.onSuccessSingle);
  } else {
  libraryApi.getBooks()
  .done(ui.onSuccess);
  }
}

// On document ready
$(() => {
  $('#get-books').on('click', getBooksHandler);

});
