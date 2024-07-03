import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../model/book/book';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  http: HttpClient = inject(HttpClient);

  apiUrl: string = 'http://localhost:8080/';

  constructor() {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl + 'books');
  }

  postOne(book: Book) {
    return this.http
      .post(this.apiUrl + 'books', book)
      .subscribe((newBook) => console.log(newBook));
  }
}
