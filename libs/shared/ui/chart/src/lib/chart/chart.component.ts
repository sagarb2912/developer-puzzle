import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Observable } from 'rxjs';

import { INITIAL_CHART_DATA } from './constants/chart.constants';
import { IChartDetails } from './interfaces/chart-details.interface';

/**
 * Google chart component
 */
@Component({
  selector: 'coding-challenge-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input()
  public data$: Observable<(string | number)[][]>;
  public chart: IChartDetails;

  constructor() { }

  public ngOnInit(): void {
    this.chart = INITIAL_CHART_DATA;
  }
}
