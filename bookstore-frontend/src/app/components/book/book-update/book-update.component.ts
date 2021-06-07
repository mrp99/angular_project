import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {
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

  updateBook(): void {
    this.bookService.update(this.book).subscribe(() => {
      this.bookService.showMessage('Produto Atualizado com Sucesso!');
      this.router.navigate(['/books']);
    });
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}
