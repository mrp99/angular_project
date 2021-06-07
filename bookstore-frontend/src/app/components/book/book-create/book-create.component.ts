import { Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  book: Book =
    {
      name: '',
      author: '',
      gender: '',
      price: 0
    };

  constructor(
    private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createBook(): void {
    this.bookService.create(this.book).subscribe(() => {
      this.bookService.showMessage('Livro foi criado!');
      this.router.navigate(['/books']);
    });
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }

}
