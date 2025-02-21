const myLibrary = [
	{
		id: 1,
		title: "Book1",
		author: "Author1",
		noOfPages: 123,
		hasRead: false,
	},
	{
		id: 2,
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

	this.id = Date.now();
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

		// Clear existing content
		libraryContainer.innerHTML = "";
		
		myLibrary.forEach((book) => {
			const bookTitle = createElement("p", "title", book.title);
			
			const bookAuthor = createElement("p", "author", book.author);
			
			const bookPageCount = createElement("p", "page-count", `${book.noOfPages} pages`);
			
			const bookReadStatus = createElement("p", "read-status", book.hasRead ? "Read" : "Not Read");

			const bookCardDetailsContainer = createElement("div", "card-details");
			bookCardDetailsContainer.append(bookTitle, bookAuthor, bookPageCount, bookReadStatus);

			const removeButton = createElement("button", "remove", "Remove");
			removeButton.addEventListener("click", () => {
				const foundBookIndex = myLibrary.findIndex((book) => book.id === bookCard.id );
				myLibrary.splice(foundBookIndex, 1);
				displayBooks();
			});

			const toggleReadButton = createElement("button", "toggle", "Toggle Read");

			const cardCTAContainer = createElement("div", "cta-container");
			cardCTAContainer.append(toggleReadButton, removeButton);
			
			const bookCard = createElement("div", "card");
			bookCard.id = book.id;
			bookCard.append(bookCardDetailsContainer, cardCTAContainer);
			
			libraryContainer.appendChild(bookCard);
		});
	}
}

displayBooks();

const addNewBookDialog = document.querySelector("#add-new-book-dialog");
const addNewBookButton = document.querySelector(".header button");
const addNewBookForm = document.querySelector("#add-new-book-dialog form");
const closeAddNewBookDialogButton = document.querySelector(".cancel");
const submitAddNewBookDialogButton = document.querySelector(".submit");

addNewBookButton.addEventListener("click", () => {
	addNewBookDialog.showModal();
});

// Listen for submit type button's click to prevent form submission and close modal
closeAddNewBookDialogButton.addEventListener("click", (event) => {
	event.preventDefault();
	addNewBookDialog.close();
});

addNewBookForm.addEventListener("submit", (event) => {
	event.preventDefault();
	
	const formData = new FormData(event.target);
	const title = formData.get("title");
	const author = formData.get("author");
	const noOfPages = formData.get("no-of-pages");
	const hasRead = formData.get("read-status") === "on"; // Check if the read-status checkbox is checked

	addBookToLibrary(title, author, noOfPages, hasRead);
	displayBooks();

	addNewBookDialog.close();
});