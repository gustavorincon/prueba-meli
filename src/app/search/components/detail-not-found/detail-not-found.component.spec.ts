import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNotFoundComponent } from './detail-not-found.component';

describe('DetailNotFoundComponent', () => {
  let component: DetailNotFoundComponent;
  let fixture: ComponentFixture<DetailNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
