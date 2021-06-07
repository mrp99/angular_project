import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { BookComponent } from './views/book/book.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'books/create',
    component: BookCreateComponent
  },
  {
    path: 'books/update/:id',
    component: BookUpdateComponent
  },
  {
    path: 'books/delete/:id',
    component: BookDeleteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
