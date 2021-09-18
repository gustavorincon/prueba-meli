import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './containers/detail/detail.component';
import { HomeComponent } from './containers/home/home.component';
import { ListComponent } from './containers/list/list.component';


const routes: Routes = [
    {
     path: '',
     component: HomeComponent,
     children: [
      {
        path: 'items',
       component: ListComponent,
      },
      {
        path: 'items/:id',
       component: DetailComponent,
      }
    ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class SearchRoutingModule {}
