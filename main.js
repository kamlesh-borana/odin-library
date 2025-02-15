const myLibrary = [
	{
		title: "Book1",
		author: "Author1",
		noOfPages: 123,
		hasRead: false,
	},
	{
		title: "Book2",
		author: "Author3",
		noOfPages: 321,
		hasRead: true,
	}
];

function Book(title, author, noOfPages, hasRead) {

	// Check if the function is called as a constructor function using the new operator
	if(!new.target) {
		throw Error("Must use the new operator to call the function");
	}

	this.title = title;
	this.author = author;
	this.noOfPages = noOfPages;
	this.hasRead = hasRead;
}

function addBookToLibrary(title, author, noOfPages, hasRead) {
  
	const book = new Book(title, author, noOfPages, hasRead);
	
	myLibrary.push(book);
}

function createElement(elementName, className, textContent) {
	const createdElement = document.createElement(elementName);
	className && createdElement.classList.add(className);
	textContent && (createdElement.textContent = textContent);

	return createdElement;
}

function displayBooks() {
	if(myLibrary?.length) {
		const libraryContainer = document.querySelector(".library");
		
		myLibrary.forEach((book) => {
			const bookTitle = createElement("p", "title", book.title);
			
			const bookAuthor = createElement("p", "author", book.author);
			
			const bookPageCount = createElement("p", "page-count", `${book.noOfPages} pages`);
			
			const bookReadStatus = createElement("p", "read-status", book.hasRead ? "Read" : "Not Read");

			const bookCardDetailsContainer = createElement("div", "card-details");
			bookCardDetailsContainer.append(bookTitle, bookAuthor, bookPageCount, bookReadStatus);
			
			const bookCard = createElement("div", "card");
			bookCard.append(bookCardDetailsContainer);
			
			libraryContainer.appendChild(bookCard);
		});
	}
}

displayBooks();

const addNewBookDialog = document.querySelector("#add-new-book-dialog");
const addNewBookButton = document.querySelector(".header button");
const closeAddNewBookDialogButton = document.querySelector(".cancel");

addNewBookButton.addEventListener("click", () => {
	addNewBookDialog.showModal();
});

closeAddNewBookDialogButton.addEventListener("click", () => {
	addNewBookDialog.close();
});