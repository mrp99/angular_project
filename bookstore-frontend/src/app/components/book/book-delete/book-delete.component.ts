import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {
  book: Book =
    {
      name: '',
      author: '',
      gender: '',
      price: 0
    };

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.bookService.readById(id).subscribe(book => {
      this.book = book;
    });
  }

  deleteBook(): void {
    this.bookService.delete(this.book.id).subscribe(() => {
      this.bookService.showMessage('Livro excluido com sucesso!');
      this.router.navigate(['/books']);
    });
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}
