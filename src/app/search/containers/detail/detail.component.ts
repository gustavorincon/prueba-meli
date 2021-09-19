import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFacade } from '../../../shared/facades/product.facade';
import { searchItem } from 'src/app/store/actions/product.actions';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ItemResponse } from 'src/app/shared/responses/item.response';

@UntilDestroy()
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: ItemResponse|null;

  constructor(private route: ActivatedRoute,
              public productFacade: ProductFacade) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productFacade.dispatch(searchItem({idItem: params.id}));
    });
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
