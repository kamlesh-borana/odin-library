const myLibrary = [];

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
