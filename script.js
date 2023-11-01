const myLibrary = [];

function Book(title,author,pages,read,rating,notes) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.rating = rating
    this.notes = notes
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}.`
    }
}

function addBookToLibrary(title,author,pages,read,rating,notes) {
  const newBook = new Book(title,author,pages,read,rating,notes);
  myLibrary.push(newBook)
}

const theHobbit = new Book("The Hobbit", "J R Tolkien", 250, "Y", 3,"There and back again.");
const greatExpectations = new Book("Great Expectations", "Charles Dickens", 500, "Y", 3.5,"Lower your expectations.");
const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1000, "N", "N/A","Maybe one day.");
const theDaVinciCode = new Book("The DaVinci Code", "Dan Brown", 400, "Y", 0.5,"It is really shit.")
myLibrary.push(theHobbit,greatExpectations,warAndPeace,theDaVinciCode);

// addBookToLibrary("catch22","Catch 22","Joseph Heller",500,"Y",5,"You have to admit, it is a good catch.")


function publishLibrary() {
  const bookCount = myLibrary.length;

  for (let i = 0;  i < bookCount; i++) {
    let tableBody = document.getElementById("libraryTable").getElementsByTagName("tbody")[0];
    let newRow = tableBody.insertRow(-1);

    let c1 = newRow.insertCell(0);
    let c2 = newRow.insertCell(1);
    let c3 = newRow.insertCell(2);
    let c4 = newRow.insertCell(3);
    let c5 = newRow.insertCell(4);
    let c6 = newRow.insertCell(5);

    c1.innerHTML = myLibrary[i].title;
    c2.innerHTML = myLibrary[i].author;
    c3.innerHTML = myLibrary[i].pages;
    c4.innerHTML = myLibrary[i].read;
    c5.innerHTML = myLibrary[i].rating;
    c6.innerHTML = myLibrary[i].notes;
  }
}
