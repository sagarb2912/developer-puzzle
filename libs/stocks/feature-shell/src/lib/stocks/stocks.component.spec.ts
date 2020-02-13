import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of, Subscription } from 'rxjs';
import { StoreModule } from '@ngrx/store';

import { StocksComponent } from './stocks.component';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { StocksFeatureShellModule } from '@coding-challenge/stocks/feature-shell';


describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;
  let priceQueryFacade: PriceQueryFacade;
  const formBuilder: FormBuilder = new FormBuilder();
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StocksFeatureShellModule, StoreModule.forRoot({}), NoopAnimationsModule],
      providers: [PriceQueryFacade, { provide: FormBuilder, useValue: formBuilder }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    priceQueryFacade = fixture.debugElement.injector.get(PriceQueryFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnDestroy()', () => {
    it('should unsubscribe  stockPickerFormSubscription', () => {
      (component as any).stockPickerFormSubscription = new Subscription();
      const spy = spyOn((component as any).stockPickerFormSubscription, 'unsubscribe');
      component.ngOnDestroy();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchQuote()', () => {
    beforeEach(() => {
      component.stockPickerForm = formBuilder.group({
        symbol: ['AAPL', Validators.required],
        period: ['2y', Validators.required]
      });
    });
    it('should call fetchQuote of priceQueryFacade one time with AAPL as first param'
    +' and 2y as second param', async(() => {
      spyOn(priceQueryFacade, 'fetchQuote').and.stub();
      (component as any).fetchQuote();
      expect(priceQueryFacade.fetchQuote).toHaveBeenCalledTimes(1);
      expect(priceQueryFacade.fetchQuote).toHaveBeenCalledWith('AAPL', '2y');
    }));
    it('should not call fetchQuote of priceQueryFacade if form is invalid', async(() => {
      component.stockPickerForm = formBuilder.group({
        symbol: [null, Validators.required],
        period: [null, Validators.required]
      });
      spyOn(priceQueryFacade, 'fetchQuote').and.stub();
      (component as any).fetchQuote();
      expect(priceQueryFacade.fetchQuote).not.toHaveBeenCalled();
    }));
  });

  describe('ngOnInit()', () => {
    it('should call fetchQuote one time', () => {
      spyOn(component as any, 'fetchQuote');
      component.stockPickerForm.controls['symbol'].setValue('test');
      spyOn(component.stockPickerForm, 'valueChanges').and.returnValue(of({}));
      component.ngOnInit();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component['fetchQuote']).toHaveBeenCalledTimes(1);
      });
    });
  });
});
