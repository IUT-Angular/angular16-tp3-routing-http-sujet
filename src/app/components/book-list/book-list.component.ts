import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  providers: [BookService]
})
export class BookListComponent {
  books: Book[] = [];

  constructor(protected bookService: BookService){

  }

  ngOnInit(){
    this.books = this.bookService.getAll();
  }
}
