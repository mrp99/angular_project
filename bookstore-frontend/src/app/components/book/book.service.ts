import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:3000/books';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um Erro', true);
    return EMPTY;
  }

  read(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(book: Book): Observable<Book> {
    const url = `${this.baseUrl}/${book.id}`;
    return this.http.put<Book>(url, book).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: any): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Book>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
}
