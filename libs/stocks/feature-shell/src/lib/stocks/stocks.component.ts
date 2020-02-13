import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { EStockStaticContent } from './enums/stocks-static-content.enum';
import { PERIOD_CONSTANTS } from './constants/stocks.constants';

@Component({
  selector: 'coding-challenge-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  public stockPickerForm: FormGroup;
  public stockStaticContent: typeof EStockStaticContent = EStockStaticContent;
  public quotes$: Observable<(string | number)[][]> = this.priceQuery.priceQueries$;
  public currentDate: Date = new Date();
  public selectedFromDate: Date;

  constructor(private fb: FormBuilder, private priceQuery: PriceQueryFacade) {
    this.stockPickerForm = fb.group({
      symbol: [null, Validators.required],
      toDate: [null, Validators.required],
      fromDate: [null, Validators.required]
    });
  }

  ngOnInit() { }

  public onFromDateChanged(): void {
    this.selectedFromDate = this.stockPickerForm.value.fromDate;
    const { fromDate, toDate } = this.stockPickerForm.value;
    if (fromDate && toDate && fromDate > toDate) {
      this.stockPickerForm.controls['toDate'].setValue(fromDate);
    }
  }

  public fetchQuote(): void {
    if (this.stockPickerForm.valid) {
      const { symbol, fromDate, toDate } = this.stockPickerForm.value;
      this.priceQuery.setDateRange(fromDate, toDate);
      this.priceQuery.fetchQuote(symbol, PERIOD_CONSTANTS.MAX);
    }
  }
}
