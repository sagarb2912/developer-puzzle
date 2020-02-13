import { IChartOptions } from '../interfaces/chart-option.interface';
/**
 * chart information
 */
export interface IChartDetails {
    title: string;
    type: string;
    columnNames: string[],
    options: IChartOptions;
}