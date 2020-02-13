/**
 * Server config
 */
import { NUMBER_CONSTANT } from '../constants/number-constants';
import { API_CONST } from '../constants/api-constants';

const CatboxMemory = require('@hapi/catbox-memory');
export const SERVER_CONFIG = {
    port: NUMBER_CONSTANT.THIRTY_THREE_THIRTY_THREE,
    cache: [
        {
            name: API_CONST.MY_CACHE,
            provider: {
                constructor: CatboxMemory,
            }
        }
    ],
    host: API_CONST.LOCAL_HOST,
    routes: {
        cors: true
    }
};
