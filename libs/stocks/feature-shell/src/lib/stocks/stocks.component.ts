import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { EStockStaticContent } from './enums/stocks-static-content.enum';
import { TIME_PERIOD_DETAILS } from './constants/stocks.constants';

/**
 *  stock information component
 */
@Component({
  selector: 'coding-challenge-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit, OnDestroy {
  public stockPickerForm: FormGroup;
  public stockStaticContent: typeof EStockStaticContent = EStockStaticContent;
  public timePeriods = TIME_PERIOD_DETAILS;
  public quotes$: Observable<(string | number)[][]> = this.priceQuery.priceQueries$;

  private stockPickerFormSubscription: Subscription;

  constructor(private fb: FormBuilder, private priceQuery: PriceQueryFacade) {
    this.stockPickerForm = fb.group({
      symbol: [null, Validators.required],
      period: [null, Validators.required]
    });
  }

  public ngOnInit(): void {
    this.stockPickerFormSubscription = this.stockPickerForm.valueChanges.subscribe(() => {
      this.fetchQuote();
    });
  }

  public ngOnDestroy(): void {
    if (this.stockPickerFormSubscription) {
      this.stockPickerFormSubscription.unsubscribe();  
    }    
  }

  private fetchQuote(): void {
    if (this.stockPickerForm.valid) {
      const { symbol, period } = this.stockPickerForm.value;
      this.priceQuery.fetchQuote(symbol, period);
    }
  }
}
