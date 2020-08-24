function createLibrary(name) {
  return {
    name: name,
     shelves: {
       fantasy:[],
       fiction:[],
       nonFiction:[],
    }
  };
}

function addBook(location, bookObject){
  location.shelves[bookObject.genre].push(bookObject);
}

function checkoutBook(location, bookTitle)
  for (var genre in location.shelves) {
   for (var i = 0; i < location.shelves[genre].length; i++) {
     if (location.shelves [genre][i].title === bookTitle) {
    location.shelves [genre].splice(i,1);
    return `You have now checked out ${bookTitle} from the Denver Public Library`
    }
  }
}


module.exports = {
   createLibrary: createLibrary,
   addBook: addBook,
   checkoutBook: checkoutBook
};
