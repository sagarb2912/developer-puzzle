/**
 * Cache config
 */
import { API_CONST } from '../constants/api-constants';
import { NUMBER_CONSTANT } from '../constants/number-constants';

export const CACHE_CONFIG = {
    cache: {
        cache: API_CONST.MY_CACHE,
        expiresIn: NUMBER_CONSTANT.TEN * NUMBER_CONSTANT.ONE_THOUSAND,
        generateTimeout: NUMBER_CONSTANT.TEN_THOUSAND
    }
};
