import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.scss']
})
export class BookReadComponent implements OnInit {

  books = new Array<Book>();
  displayedColumns = ['id', 'name', 'author', 'gender', 'price', 'actions'];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.read().subscribe(books => {
      this.books = books;
    });
  }

}
