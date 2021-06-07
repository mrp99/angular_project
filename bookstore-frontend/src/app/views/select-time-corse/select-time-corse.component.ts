import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-time-corse',
  templateUrl: './select-time-corse.component.html',
  styleUrls: ['./select-time-corse.component.scss']
})
export class SelectTimeCorseComponent implements OnInit {

  timeCorses = [
    {
      name: 'Iniciando'
    },
    {
      name: 'Na Metade',
    },
    {
      name: 'Terminando',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
