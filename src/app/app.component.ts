import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookServiceService } from './service/bookService/book-service.service';
import { Book } from './model/book/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  bookService: BookServiceService = inject(BookServiceService);

  book: Book = new Book(
    0,
    '',
    '',
    {
      id: 0,
      name: '',
    },
    '',
    ''
  );

  books: Book[] = [];

  onSubmit() {
    console.log(this.book);
    this.bookService.postOne(this.book);
  }

  ngOnInit() {
    this.bookService.getAll().subscribe((books) => (this.books = books));
  }
}
