import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent {
  @Output() addBookEvent = new EventEmitter<Book>();

  book: Book = { id: 0, title: '', author: '', publicationDate: new Date() }
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(this.book.title, Validators.required),
    author: new FormControl(this.book.author, Validators.required),
    publicationDate: new FormControl(this.book.publicationDate, Validators.required)
  });

  addBook() {
    this.book = this.bookForm.value;

    this.addBookEvent.emit(this.book);
    this.bookForm.reset();
  }
}
