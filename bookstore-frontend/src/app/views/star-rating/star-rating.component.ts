import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  rating = 0;
  starCount = 5;
  ratingArr = new Array<boolean>();//true estrela solida e falso para nao solida

  snackBarDuration = 2000;
  response = [
    'Você quebrou meu coração',
    'É seriooooo!?',
    'Vamos fazer melhor da proxima vez!',
    'Fico feliz que tenha gostado',
    'Muito Obrigado S2!'
  ];

  constructor(private matSnackBar: MatSnackBar) {

    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
  }

  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'stars';
    } else {
      return 'star_border';
    }
  }

  onClick(i: number) {
    this.rating = i + 1;
    this.matSnackBar.open(this.response[i], '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar']
    });
  }

}
