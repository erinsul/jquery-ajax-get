'use strict';

const onSuccessSingle = function(data) {
  console.log(data.book);
  $("#answer").text("The book you selected is " + data.book.title + " by " + data.book.author + ".");
};
const onSuccess = function(data){
  console.table(data.books);
  $("#answer").text("You didn't select a specific book! So here they all are:");
  for(let i=0; i<data.books.length; i++) {
    $("#answer").append("<p>" + data.books[i].title + " by " + data.books[i].author + "</p>")
  }
};

module.exports = {
  onSuccess,
  onSuccessSingle,
};
