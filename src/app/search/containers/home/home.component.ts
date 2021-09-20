import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Title} from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/services/seo.service';
import { LabelSeo } from 'src/app/shared/enums/labels-seo.enum';
import { SEO_PAGE_HOME } from 'src/app/shared/consts/seo.conts';
import { ProductFacade } from 'src/app/shared/facades/product.facade';
import { searchListItems } from 'src/app/store/actions/product.actions';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly TITLE_PAGE = LabelSeo.TITLE_PAGE_HOME;
  filter: string;

  constructor(private router: Router,
              public seo: SeoService,
              private title: Title,
              public productFacade: ProductFacade,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams
    .pipe(
        filter((params: Params) => params.search),
        map((params: Params) => params.search)
    )
    .subscribe(search => {
      this.filter = search;
    });
    this.title.setTitle(this.TITLE_PAGE);
    this.seo.generateTags(SEO_PAGE_HOME);
  }


 // tslint:disable-next-line:typedef
 search($event: string){
  this.router.navigate(['/items'], { queryParams: { search: $event } });
  }

}
