import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService) {
      headerService.headerData =
      {
        title: 'Cadastro de Livros',
        icon: 'storefront',
        routeUrl: '/books'
      };
     }

  ngOnInit(): void {
  }

  navegateToBookCreate(): void {
    this.router.navigate(['/books/create']);

  }


}
