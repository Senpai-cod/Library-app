const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = function(){
    return(
            this.title + " by "+
            this.author + ", " +
            this.pages + ", " +
            this.read
    );
    }
    const cards = document.querySelector(".cards");
    
function displayBooks(){
    cards.innerHTML = "";
   for(let i=0 ; i < myLibrary.length ; i++){ 
    const card = document.createElement("div");
    card.setAttribute("class","card");
    
    const remove = document.createElement("button");

    const cardInfos = document.createElement("div");
    cardInfos.innerHTML = `Title: ${myLibrary[i].title} <br>
                            Author: ${myLibrary[i].author} <br>
                             Pages: ${myLibrary[i].pages}<br>
                             reading state:${myLibrary[i].read}`
    cardInfos.appendChild(remove);
    card.appendChild(cardInfos);
    cards.appendChild(card);
   }
}

const button = document.querySelector(".addBook");
const closeButton = document.querySelector(".cancel");
const confirmButton = document.querySelector(".confirm");

const dialog = document.querySelector("dialog");
const body = document.querySelector(".body");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

function addBookTOLibrary(){
    let title = titleInput.value
    let author = authorInput.value
    let pages = pagesInput.value
    let read = readInput.checked ? "read" : "not read";

    let book = new Book(title,author,pages,read);
        return myLibrary.push(book); 
    }

button.addEventListener("click", ()=>{
    dialog.showModal();
    cards.removeChild(card);
})

confirmButton.addEventListener("click", (event)=>{
    event.preventDefault();
    dialog.close();
    addBookTOLibrary();
    displayBooks();
});