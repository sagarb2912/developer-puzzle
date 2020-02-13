import { IChartDetails } from '../interfaces/chart-details.interface';

/**
 * chart detail constants
 */
export const CHART_DETAILS = {
    CHART_TYPE: 'LineChart',
    FIEST_COLUMN_NAME: 'period',
    SECOND_COLUMN_NAME: 'close',
    OPTION_TITLE: 'Stock price',
    OPTION_WIDTH: '600',
    OPTION_HEIGHT: '400'
}

/**
 * Initial chart data
 */
export const INITIAL_CHART_DATA: IChartDetails = {
    title: '',
    type: CHART_DETAILS.CHART_TYPE,
    columnNames: [
        CHART_DETAILS.FIEST_COLUMN_NAME,
        CHART_DETAILS.SECOND_COLUMN_NAME
    ],
    options: {
        title: CHART_DETAILS.OPTION_TITLE,
        width: CHART_DETAILS.OPTION_WIDTH,
        height: CHART_DETAILS.OPTION_HEIGHT
    }
};

