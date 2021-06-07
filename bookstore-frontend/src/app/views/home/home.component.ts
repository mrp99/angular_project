import { HeaderData } from './../../components/template/header/header-data.model';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  numberOfLikes = 0;

  constructor(private headerService: HeaderService) {


    headerService.headerData =
    {
      title: 'BookStore',
      icon: 'home',
      routeUrl: ''
    };
  }

  ngOnInit(): void {
  }

}
