import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { DetailComponent } from './containers/detail/detail.component';
import { SearchRoutingModule } from './search.routes';
import { SearchComponent } from './components/search/search.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListComponent } from './containers/list/list.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    SearchComponent,
    ItemListComponent,
    ItemDetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
