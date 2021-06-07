import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // tslint:disable-next-line: variable-name
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'BookStore',
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }
  // metodo para acessar o _headerData
  get headerData(): HeaderData {
    return this._headerData.value;
  }
  // metodo para acessar o _headerData
  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
