let myLibrary = [];
var index = 0;

//New book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return (this.title + ", " + this.author + ", " + this.pages + ", " + this.read);
}


const newBookButton = document.getElementById("newBook");

newBookButton.addEventListener('click', function addBookToLibrary() {
    let title = prompt("Write the title of the book");
    let author = prompt("Write the author's name");
    let pages = prompt("Write the number of pages");
    let read = 'No'

    tableGenerator(title, author, pages, read)

    //Call's the constructor and make a console table
    const books = new Book(title, author, pages, read)
    myLibrary.push(books);
    console.table(myLibrary);
});

function tableGenerator(title, author, pages, read) {
    var indexCounter = index++;

    var table = document.getElementById('library').getElementsByTagName('tbody')[0];
    var row = table.insertRow(-1);

    //Create a delete button and call the event on click
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.setAttribute('id', 'delBtn');

    deleteButton.addEventListener('click', () => { deleteBtn(deleteCell) })

    //Create a 'Read' button that change the read table value
    const readButton = document.createElement('button');
    readButton.innerHTML = 'Read';
    readButton.setAttribute('id', 'readBtn');

    readButton.addEventListener('click', () => {readBtn(readCell)})

    // Insert new elements on the display table
    var deleteCell = row.insertCell();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var readCell = row.insertCell();
    var readBtnCell = row.insertCell();

    var newTitle = document.createTextNode(title);
    var newAuthor = document.createTextNode(author);
    var newPages = document.createTextNode(pages);
    var newRead = document.createTextNode(read);
    
    deleteCell.appendChild(deleteButton)
    cell1.appendChild(newTitle);
    cell2.appendChild(newAuthor);
    cell3.appendChild(newPages);
    readCell.appendChild(newRead);
    readBtnCell.appendChild(readButton)
}

//Delete function, target the parent Node of the inserted element
function deleteBtn(row) {
    var parent = row.parentNode;
    parent.parentNode.removeChild(parent);
}

//Change the 'Read' value
function readBtn(cell){
    if (cell.innerHTML === 'No'){
        cell.innerHTML = 'Yes';
    }
    else if (cell.innerHTML === 'Yes'){
        cell.innerHTML = 'No';
    }
}