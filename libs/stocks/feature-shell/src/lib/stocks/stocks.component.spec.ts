import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StocksComponent } from './stocks.component';
import { StocksFeatureShellModule } from '../stocks-feature-shell.module';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StocksFeatureShellModule, StoreModule.forRoot({}), NoopAnimationsModule],
      providers: [PriceQueryFacade]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
