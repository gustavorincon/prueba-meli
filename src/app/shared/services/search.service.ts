import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SearchResponse } from '../responses/search.response';
import { ItemResponse } from '../responses/item.response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  searchItems(search: string): Observable<SearchResponse> {
    return this.http
      .get<SearchResponse>(
        `${environment.urlBase}`
      )
      .pipe(
        map((response: SearchResponse) => {
          return response;
        })
      );
  }

  searchItem(idItem: string): Observable<ItemResponse> {
    return this.http
      .get<ItemResponse>(
        `${environment.urlBase}/idItem`
      )
      .pipe(
        map((response: ItemResponse) => {
          return response;
        })
      );
  }
}
