const myLibrary = [];

function Book(title, author, pages, read, rating) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.rating = rating
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}.`
    }
    // myLibrary.push(this);
}

function addBookToLibrary(title,author,pages,read,rating) {
  const newBook = new Book(title,author,pages,read,rating);
  myLibrary.push(newBook)
}

const theHobbit = new Book("The Hobbit", "J R Tolkien", 250, "Y", 3);
const greatExpectations = new Book("Great Expectations", "Charles Dickens", 500, "Y", 3.5);
const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1000, "N", "N/A");
const theDaVinciCode = new Book("The DaVinci Code", "Dan Brown", 400, "Y", 0.5)
myLibrary.push(theHobbit,greatExpectations,warAndPeace,theDaVinciCode);

// addBookToLibrary("catch22", "Catch 22", "Joseph Heller", 500, "Y", 5)

