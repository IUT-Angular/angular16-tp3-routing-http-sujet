import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [BookService]
})
export class AppComponent {
  title = 'tp2';

  constructor(protected bookService: BookService){ }
  
  addBook($event: Book): void {
    this.bookService.addBook($event);
  }
}
