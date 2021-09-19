import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFacade } from 'src/app/shared/facades/product.facade';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SearchResponse } from 'src/app/shared/responses/search.response';
import {Title} from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/services/seo.service';
import { LabelSeo } from 'src/app/shared/enums/etiquetas-seo.enum';
import { SEO_PAGE_LIST } from 'src/app/shared/consts/seo.conts';
import { Item } from 'src/app/shared/models/item.model';

@UntilDestroy()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  listItems: Item[];
  readonly TITLE_PAGE = LabelSeo.TITLE_PAGE_LIST;

  constructor(public productFacade: ProductFacade,
              public seo: SeoService,
              private title: Title) { }

  ngOnInit(): void {
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
        console.log(listItemsResponse);
      }
    });
  }

}
