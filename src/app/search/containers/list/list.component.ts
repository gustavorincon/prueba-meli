import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFacade } from 'src/app/shared/facades/product.facade';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SearchResponse } from 'src/app/shared/responses/search.response';
import {Title} from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/services/seo.service';
import { LabelSeo } from 'src/app/shared/enums/etiquetas-seo.enum';
import { SEO_PAGE_LIST } from 'src/app/shared/consts/seo.conts';

@UntilDestroy()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {


  listIItems: SearchResponse|null;
  readonly TITLE_PAGE = LabelSeo.TITLE_PAGE_LIST;

  constructor(private route: ActivatedRoute,
              public productFacade: ProductFacade,
              public seo: SeoService,
              private title: Title) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
     /*this.idQuote = String(params['id']); */
    });
    this.title.setTitle(this.TITLE_PAGE);
    this.seo.generateTags(SEO_PAGE_LIST);
    this.getListItemsSubscription();
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
     /*this.idQuote = String(params['id']); */
    });
  }

   // tslint:disable-next-line:typedef
   getListItemsSubscription() {
    this.productFacade.items
    .pipe(untilDestroyed(this))
    .subscribe((listItemsResponse: SearchResponse|null) => {
      if (!! listItemsResponse){
        this.listIItems = listItemsResponse;
      }
    });
  }

}
