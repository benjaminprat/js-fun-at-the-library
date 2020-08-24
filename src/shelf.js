
function shelfBook(bookObj, shelfArr) {
  if (shelfArr.length < 3) {
    shelfArr.unshift(bookObj);
  } else {
    return shelfArr;
  }
}

function unshelfBook(titleStr, shelf) {
  for (var i = 0; i < shelf.length; i++){
    if (shelf[i].title == titleStr) {
    shelf.splice(i,1)
  };
 };
};

function listTitles(shelf){
  var bookList = [];
 for (var i = 0; i <shelf.length; i++) {
   bookList.push(shelf[i].title)
   }
return bookList.join(", ")
  }

function searchShelf(shelf, book) {

  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      return true
    }
  }
  return false
  }



module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
 searchShelf: searchShelf
};
