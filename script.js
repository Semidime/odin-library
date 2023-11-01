const myLibrary = [];

function Book(title,author,pages,read,rating,notes) {
    this.reference = "NE_"+(myLibrary.length+1).toString().padStart(4,0);
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.rating = rating
    this.notes = notes
}

function addBookToLibrary(title,author,pages,read,rating,notes) {
  const newBook = new Book(title,author,pages,read,rating,notes);
  myLibrary.push(newBook)
}

// const theHobbit = new Book("The Hobbit", "J R Tolkien", 250, "Y", 3,"There and back again.");
// const greatExpectations = new Book("Great Expectations", "Charles Dickens", 500, "Y", 3.5,"Lower your expectations.");
// const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1000, "N", "N/A","Maybe one day.");
// const theDaVinciCode = new Book("The DaVinci Code", "Dan Brown", 400, "Y", 0.5,"It is really shit.")
// myLibrary.push(theHobbit,greatExpectations,warAndPeace,theDaVinciCode);

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
    let c7 = newRow.insertCell(6);

    c1.innerHTML = myLibrary[i].reference;
    c2.innerHTML = myLibrary[i].title;
    c3.innerHTML = myLibrary[i].author;
    c4.innerHTML = myLibrary[i].pages;
    c5.innerHTML = myLibrary[i].read;
    c6.innerHTML = myLibrary[i].rating;
    c7.innerHTML = myLibrary[i].notes;    
  }
}

addBookToLibrary("Catch 22","Joseph Heller",500,"Y",5,"You have to admit, it is a good catch.")
addBookToLibrary("The Hobbit", "J R Tolkien", 250, "Y", 3,"There and back again.")
addBookToLibrary("Great Expectations", "Charles Dickens", 500, "Y", 3.5,"Lower your expectations.")
addBookToLibrary("War and Peace", "Leo Tolstoy", 1000, "N", "N/A","Maybe one day.")
addBookToLibrary("The DaVinci Code", "Dan Brown", 400, "Y", 0.5,"It is really shit.")
publishLibrary()
