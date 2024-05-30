import { Injectable } from "@angular/core";
import { BOOKS } from "../datas/books.stub";
import { Book } from "../models/book.model";

@Injectable()
export class BookService {
    private books: Book[];

    constructor(){
        this.books = BOOKS;
    }

    getAll(): Book[]{
        return this.books;
    }

    addBook(book: Book): void{
        if(book.id === 0){
            book.id = Math.max(...this.books.map(b => b.id)) + 1;
        }

        this.books.push(book);
    }
}