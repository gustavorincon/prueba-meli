import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductFacade } from 'src/app/shared/facades/product.facade';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SearchResponse } from 'src/app/shared/responses/search.response';
import {Title} from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/services/seo.service';
import { LabelSeo } from 'src/app/shared/enums/labels-seo.enum';
import { SEO_PAGE_LIST } from 'src/app/shared/consts/seo.conts';
import { Item } from 'src/app/shared/models/item.model';
import { filter, map } from 'rxjs/operators';
import { cleanItem, cleanItems, searchItemSuccess, searchListItems } from 'src/app/store/actions/product.actions';
import { ErrorText } from 'src/app/shared/enums/error-text.enum';


@UntilDestroy()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  listItems: Item[];
  categories: string[];
  readonly TITLE_PAGE = LabelSeo.TITLE_PAGE_LIST;
  readonly TEXT_ITEMS_LIST_NOT_FOUND = ErrorText.TEXT_ERROR_ITEMS_LIST_NOT_FOUND;
  showNotFound = false;

  constructor(public productFacade: ProductFacade,
              public seo: SeoService,
              private title: Title,
              private route: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.productFacade.dispatch(cleanItems());
    this.route.queryParams
            .pipe(
                filter((params: Params) => params.search),
                map((params: Params) => params.search)
            )
            .subscribe(search => {
              this.productFacade.dispatch(searchListItems({search}));
            });
    this.title.setTitle(this.TITLE_PAGE);
    this.seo.generateTags(SEO_PAGE_LIST);
    this.getListItemsSubscription();
  }
   // tslint:disable-next-line:typedef
   getListItemsSubscription() {
    this.productFacade.items
    .pipe(untilDestroyed(this))
    .subscribe((listItemsResponse: SearchResponse|null) => {
      if (!! listItemsResponse){
        this.listItems = listItemsResponse.items;
        this.categories =  listItemsResponse.categories;
        this.showNotFound = this.listItems.length === 0 ? true : false;
      }
    });
  }

  // tslint:disable-next-line:typedef
  nextView($event: string){
    this.productFacade.dispatch(cleanItem());
    this.router.navigate([`/items/${$event}`]);
  }

}
