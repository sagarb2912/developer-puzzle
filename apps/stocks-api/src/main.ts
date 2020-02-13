/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import { StockUtil } from './utils/stock-utils';
import { SERVER_CONFIG } from './config/server-config';
import { CACHE_CONFIG } from './config/cache-config';
import { API_CONST } from './constants/api-constants';
import { API_ENDPOINTS } from './constants/api-endpoint-constants';

const Hapi = require('hapi');

const init = async () => {
  const server = Hapi.Server(SERVER_CONFIG);
  server.method('stockCache', new StockUtil().getStockInfo, CACHE_CONFIG);

  server.route([
    {
      method: API_CONST.GET,
      path: API_ENDPOINTS.GET_STOCK,
      handler: async (request, h) => {
        const { symbol, period } = request.params;
        return await server.methods.stockCache(symbol, period);
      }
    }
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();