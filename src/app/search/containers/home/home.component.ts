import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Title} from '@angular/platform-browser';
import { SeoService } from 'src/app/shared/services/seo.service';
import { LabelSeo } from 'src/app/shared/enums/etiquetas-seo.enum';
import { SEO_PAGE_HOME } from 'src/app/shared/consts/seo.conts';
import { ProductFacade } from 'src/app/shared/facades/product.facade';
import { searchListItems } from 'src/app/store/actions/product.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly TITLE_PAGE = LabelSeo.TITLE_PAGE_HOME;

  constructor(private router: Router,
              public seo: SeoService,
              private title: Title,
              public productFacade: ProductFacade ) { }

  ngOnInit(): void {
    this.title.setTitle(this.TITLE_PAGE);
    this.seo.generateTags(SEO_PAGE_HOME);
  }


 // tslint:disable-next-line:typedef
 search($event: string){
  this.router.navigate(['/items'], { queryParams: { search: $event } });
  }

}
