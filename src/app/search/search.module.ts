import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { DetailComponent } from './containers/detail/detail.component';
import { SearchRoutingModule } from './search.routes';
import { SearchComponent } from './components/search/search.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
