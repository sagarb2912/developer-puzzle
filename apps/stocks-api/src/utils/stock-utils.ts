/**
 * Stock api utils
 */
import { environment } from '../environments/environment';
import { API_CONST } from '../constants/api-constants';

const axios = require('axios');

export class StockUtil {
    public getStockInfo = async (symbol, period) => {
        try {
            const response = await axios.get(environment.apiURL + API_CONST.BETA_STOCK + symbol
                + API_CONST.CHART + period + API_CONST.TOKEN + environment.apiKey);
            return response.data;
        } catch (error) {
            return error;
        }
    };
}
