import {
  Component,
  Input,
  OnInit  
} from '@angular/core';

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
  public chartData: (string | number)[][];
  public chart: IChartDetails;

  constructor() { }

  public ngOnInit(): void {
    this.chart = INITIAL_CHART_DATA;
  }
}
