function createTitle(title) {
  return ("The " + title)
}



function buildMainCharacter(name, age, pronouns) {
  return {
    name:name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(review, reviewArr) {
  if (!reviewArr.includes(review)) {
    return (reviewArr.push(review));
  } else {
    return (review)
  }
}

function calculatePageCount(createTitle, bookPageCount){
  return (createTitle.length * 20);
}

function writeBook(title, mainCharacter, genre) {
    return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
}

function editBook(book) {

return book.pageCount = book.pageCount * .75

}




  module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
