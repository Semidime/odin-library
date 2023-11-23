const myLibrary = [];
let refCounter = 0;

function Book(title,author,pages,read,rating,notes) {
    this.reference = "SD_"+(refCounter+1).toString().padStart(4,0);
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.rating = rating
    this.notes = notes

    refCounter += 1;
    console.log(refCounter);

    //change read status
    this.toggleReadStatus = function () {
      console.log(`hello ${this.title}`);

      if (this.read == "Y") {
        this.read = "N";
        this.rating = "-";
        publishLibrary();
      } else if (this.read == "N") {
        this.read = "Y";
        document.getElementById("updateBookRatingDialog").showModal();
        
        updateRatingForm.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(`You rated ${this.title} ${updateRatingForm.elements["submitRating"].value} / 5`);
            this.rating = updateRatingForm.elements["submitRating"].value;
            publishLibrary();            
            document.getElementById("updateBookRatingDialog").close();
          })

        clearUpdateRatingFormInputs();         
      }
    }
}

function addBookToLibrary(title,author,pages,read,rating,notes) {
  const newBook = new Book(title,author,pages,read,rating,notes);
  myLibrary.push(newBook)
}

function publishLibrary() {
  const bookCount = myLibrary.length;
  const tableBody = document.getElementById("libraryTable").getElementsByTagName("tbody")[0];

  tableBody.innerHTML = ""; //clears current rows from tableBody

  for (let i = 0;  i < bookCount; i++) {
    let newRow = tableBody.insertRow(-1);

    let c1 = newRow.insertCell(0);
    let c2 = newRow.insertCell(1);
    let c3 = newRow.insertCell(2);
    let c4 = newRow.insertCell(3);
    let c5 = newRow.insertCell(4);
    let c6 = newRow.insertCell(5);
    let c7 = newRow.insertCell(6);
    let c8 = newRow.insertCell(7);

    c1.innerHTML = myLibrary[i].reference;
    c2.innerHTML = myLibrary[i].title;
    c3.innerHTML = myLibrary[i].author;
    c4.innerHTML = myLibrary[i].pages;
    c5.innerHTML = myLibrary[i].read;
    c6.innerHTML = myLibrary[i].rating;
    c7.innerHTML = myLibrary[i].notes;    
    
    //C8 - add Button elements
    //DELETE BTN
    let deleteBtn = document.createElement("BUTTON");
    deleteBtn.setAttribute("id", `DEL_${myLibrary[i].reference}`);
    deleteBtn.setAttribute("data-index",i);
    deleteBtn.setAttribute("class","deleteBtn");
    let deleteBtnTxt = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnTxt);
    c8.appendChild(deleteBtn);

    //TOGGLE READ STATUS
    let readBtn = document.createElement("BUTTON");
    readBtn.setAttribute("id", `READ_${myLibrary[i].reference}`);
    readBtn.setAttribute("data-index",i);
    readBtn.setAttribute("class","readBtn");
    let readBtnTxt = document.createTextNode("Read (Y/N)");
    readBtn.appendChild(readBtnTxt);
    c8.appendChild(readBtn);
  }

  console.log(tableBody.rows.length)

  // add event listners to buttons
  const deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click",() => {
      deleteBook(deleteBtn.getAttribute("data-index"))
    })
  })

  const readBtns = document.querySelectorAll('.readBtn');
  readBtns.forEach((readBtn) => {
    readBtn.addEventListener("click",function () {myLibrary[readBtn.getAttribute("data-index")].toggleReadStatus()})
  })

}

addBookToLibrary("Catch 22","Joseph Heller",500,"Y",5,"You have to admit, it is a good catch.")
addBookToLibrary("The Hobbit", "J R R Tolkien", 250, "Y", 3,"There and back again.")
addBookToLibrary("Great Expectations", "Charles Dickens", 500, "Y", 3,"Lower your expectations.")
addBookToLibrary("War and Peace", "Leo Tolstoy", 1000, "N", "-","Maybe one day.")
addBookToLibrary("The DaVinci Code", "Dan Brown", 400, "Y", 0,"It is really shit.")
publishLibrary()


const dialog = document.getElementById("addBookDialog");
const openAddBookDialogButton = document.getElementById("openAddBookDialogButton");
const closeAddBookDialogButton = document.getElementById("closeAddBookDialogButton");

// openDialogButton opens the dialog modally
openAddBookDialogButton.addEventListener("click", () => {
  document.getElementById("addBookDialog").showModal();
});

// closeDialogButton closes the dialog
closeAddBookDialogButton.addEventListener("click", () => {
  document.getElementById("addBookDialog").close();
});

//submit new book to Library
newBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary(title.value,author.value,pages.value,newBookForm.elements["readBook"].value,rating.value,notes.value);
  publishLibrary()
  dialog.close();
}) 

//delete book from library
function deleteBook(indexNum) {
  console.log(`goodbye ${myLibrary[indexNum].title}`);
  myLibrary.splice(indexNum,1);
  publishLibrary();
  console.table(myLibrary)
}

function clearUpdateRatingFormInputs () {
  if (document.querySelector('input[name="submitRating"]:checked') != null) {
    document.querySelector('input[name="submitRating"]:checked').checked = false
  }
}