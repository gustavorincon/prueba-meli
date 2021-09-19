import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFacade } from '../../../shared/facades/product.facade';
import { searchItem } from 'src/app/store/actions/product.actions';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ItemResponse } from 'src/app/shared/responses/item.response';
import { SeoService } from 'src/app/shared/services/seo.service';
import { Title } from '@angular/platform-browser';
import { LabelSeo } from 'src/app/shared/enums/etiquetas-seo.enum';
import { SEO_PAGE_DETAIL } from 'src/app/shared/consts/seo.conts';

@UntilDestroy()
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: ItemResponse|null;
  readonly TITLE_PAGE = LabelSeo.TITLE_PAGE_DETAIL;

  constructor(private route: ActivatedRoute,
              public productFacade: ProductFacade,
              public seo: SeoService,
              private title: Title) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productFacade.dispatch(searchItem({idItem: params.id}));
    });
    this.title.setTitle(this.TITLE_PAGE);
    this.seo.generateTags(SEO_PAGE_DETAIL);
    this.getItemSubscription();
  }

  // tslint:disable-next-line:typedef
  getItemSubscription() {
    this.productFacade.item
    .pipe(untilDestroyed(this))
    .subscribe((itemResponse: ItemResponse|null) => {
      if (!! itemResponse){
        this.item = itemResponse;
      }
    });
  }

}
