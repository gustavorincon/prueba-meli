
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchService } from './search.service';
import { environment } from 'src/environments/environment';


describe('SearchService', () => {
  let service: SearchService;
  // Simular solicitudes HTTP
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ SearchService ]
    });
    injector = getTestBed();
    service = injector.get(SearchService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {

    // Verificamos que no haya solicitudes pendientes
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Debe retornar un Observable<SearchResponse>', () => {
      // Mock = Objeto simulado de nuestra respuesta
      const mockSearchResponse =
      {
          author: {
          name: 'Gustavo',
          lastname: 'Rincon'
          },
          categories: ['Electronico', 'Digital', 'Celular'],
          items: [
          {
          id: '123',
          title: 'Moto g 5',
          price: {
            currency: '$',
            amount: 23,
            decimals: 12
          },
          picture: 'https://http2.mlstatic.com/D_634147-MLA46042090524_052021-I.jpg',
          condition: 'Ninguna',
          free_shipping: false
          },
          {
            id: '1233',
            title: 'Moto G 6',
            price: {
              currency: '$',
              amount: 2322,
              decimals: 1233
            },
            picture: 'https://http2.mlstatic.com/D_634147-MLA46042090524_052021-I.jpg',
            condition: 'Ninguna',
            free_shipping: true
            }
          ]
      };
      service.searchItems('celulares').subscribe((response) => {
        expect(response.items.length).toBe(2);
        expect(response).toEqual(mockSearchResponse);
        expect(response.items[0].title).toBeDefined();
      });

    // Validamos la url de nuestra API
      const req = httpMock.expectOne(environment.urlBase);
      expect(req.request.method).toBe('GET'); // Validamos que sea un metodo GET
      req.flush(mockSearchResponse); // Proporcionar valores ficticios como respuesta de nuestras peticiones
  });
  it('Debe retornar un Observable<ItemResponse>', () => {

    const mockItemResponse =
    {
        author: {
        name: 'Gustavo',
        lastname: 'Rincon'
        },
        item:
        {
        id: '123',
        title: 'Moto g 5',
        price: {
          currency: '$',
          amount: 23,
          decimals: 12
        },
        picture: 'https://http2.mlstatic.com/D_634147-MLA46042090524_052021-I.jpg',
        condition: 'Ninguna',
        free_shipping: false,
        sold_quantity: 122,
        description: 'producto de buena calidad'
        }
    };

    service.searchItem('1234').subscribe((response) => {
      expect(response).toEqual(mockItemResponse);
      expect(response.item.picture).toBeDefined();
    });

  // Validamos la url de nuestra API
    const req = httpMock.expectOne(environment.urlBase);
    expect(req.request.method).toBe('GET'); // Validamos que sea un metodo GET
    req.flush(mockItemResponse); // Proporcionar valores ficticios como respuesta de nuestras peticiones

  });
});
