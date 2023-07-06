class Book {
    #title;
    #genre;
    #author;
    #read;
    #readDate;
    constructor(title, genre, author){
        this.#title = title;
        this.#genre = genre;
        this.#author = author;
        this.#read = false;
        this.#readDate = null;
    }

    get read(){
        return this.#read;
    }

    get readDate(){
        return this.#readDate;
    }

    markAsRead() {
        this.#read = true;
        this.#readDate = new Date(Date.now());
    }
}

class BookList {
    #books
    #readCount
    #unreadCount
    #nextBook
    #currentBook
    #lastBook
    constructor(){
        this.#books = [];
        this.#readCount = 0;
        this.#unreadCount = 0;
        this.#currentBook = null;
        this.#nextBook = null;
        this.#lastBook = null;
    }

    //Add a book to the book list

    addBook(book){
        this.#books.push(book);
        this.#nextBook = book;
        //Increment count of books unread when adding new book
        this.#unreadCount++;
    }

    finishCurrentBook(){
        if(this.#currentBook === null){
            console.log('no book is currently read')
        }
        //Mark the book as read
        this.#currentBook.markAsRead();
        //Change the last book read to be the book that just got finished
        this.#lastBook = this.#currentBook;
        //Change the current book to be the next book to be read
        this.#currentBook = this.#nextBook
        //Find the first unread book and change the next book to be read propery to be the first unread book you find in the list of books
        for(let book of this.#books){
            if(!book.read){
                this.#nextBook = book;
                break;
            }
        }

        //Increment count of books read because we finished reading a new one and we can count it as read
        this.#readCount++;

        //Decrement count of books unread because we finished reading a new one
        this.#unreadCount--;
    }

    get books(){
        return this.#books;
    }
    get unreadCount(){
        return this.#unreadCount;
    }
    get readCount(){
        return this.#readCount;
    }
    get currentBook(){
        return this.#currentBook;
    }

    set currentBook(book){
        this.#currentBook = book;
    }

    get nextBook(){
        return this.#nextBook;
    }

    set nextBook(book){
        this.#nextBook = book;
    }
}

const myBookList = new BookList();
const book1 = new Book("Book 1", "Fiction", "Author 1")
const book2 = new Book("Book 2", "Fiction 2", "Author 2")

myBookList.addBook(book1);
myBookList.addBook(book2);
myBookList.currentBook = myBookList.nextBook;
myBookList.finishCurrentBook();
console.log(myBookList)