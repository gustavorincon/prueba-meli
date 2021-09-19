import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor( private meta: Meta) { }

  // tslint:disable-next-line:typedef
  generateTags( config: any ){
    config = {
      title: 'Prueba Tecnica',
      description : 'Buscador de productos',
      image : '',
      slug : '',
      ...config
    };
    this.meta.updateTag({ name: 'prueba-tecnica:card', content: 'summary' });
    this.meta.updateTag({ name: 'prueba-tecnica:site', content: '@Prueba-Tecnica' });
    this.meta.updateTag({ name: 'prueba-tecnica:title', content: config.title });
    this.meta.updateTag({ name: 'prueba-tecnica:description', content: config.description });
    this.meta.updateTag({ name: 'prueba-tecnica:image', content: config.image });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'My Website Name' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `localhost/${config.slug}` });
  }
}
