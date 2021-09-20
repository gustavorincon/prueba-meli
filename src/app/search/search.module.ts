import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { DetailComponent } from './containers/detail/detail.component';
import { SearchRoutingModule } from './search.routes';
import { SearchComponent } from './components/search/search.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListComponent } from './containers/list/list.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { DetailNotFoundComponent } from './components/detail-not-found/detail-not-found.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    SearchComponent,
    ItemListComponent,
    ItemDetailComponent,
    ListComponent,
    BreadcrumbComponent,
    NotFoundComponent,
    DetailNotFoundComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class SearchModule { }
