class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, isbn) {
        this.books.push({
            title,
            author,
            isbn,
            isAvailable: true
        });
    }

    borrowBook(isbn) {
        let book = this.books.find(book => book.isbn === isbn);
        if (book) book.isAvailable = false;
    }

    returnBook(isbn) {
        let book = this.books.find(book => book.isbn === isbn);
        if (book) book.isAvailable = true;
    }

    displayBooks() {
        this.books.forEach(book => {
            console.log(`${book.title} - ${book.isAvailable ? "Available" : "Borrowed"}`);
        });
    }
}

let library = new Library();

library.addBook("How to become Rich", "Daksh Srivastava", "101");
library.addBook("Constitution", "Daksh Srivastava", "102");

library.borrowBook("101");
library.returnBook("101");

library.displayBooks();

