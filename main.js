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

function displayBooks() {
	if(myLibrary?.length) {
		const libraryContainer = document.querySelector(".library");
		
		myLibrary.forEach((book) => {
			const bookTitle = document.createElement("p");
			bookTitle.classList.add("title");
			bookTitle.textContent = book.title;
			
			const bookAuthor = document.createElement("p");
			bookAuthor.classList.add("author");
			bookAuthor.textContent = book.author;
			
			const bookPageCount = document.createElement("p");
			bookPageCount.classList.add("page-count");
			bookPageCount.textContent = book.noOfPages;
			
			const bookReadStatus = document.createElement("p");
			bookReadStatus.classList.add("read-status");
			bookReadStatus.textContent = book.hasRead;
			
			const bookCard = document.createElement("div");
			bookCard.classList.add("card");
			bookCard.append(bookTitle, bookAuthor, bookPageCount, bookReadStatus);
			
			libraryContainer.appendChild(bookCard);
		});
	}
}

displayBooks();