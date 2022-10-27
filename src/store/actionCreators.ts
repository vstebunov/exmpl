import { ACTIONS, RefreshManufacturersAction} from './types';
import {Manufacturer} from '../manufacturers/manufacturer';

export const refreshManufacturers = (...manufacturers: Manufacturer[]): RefreshManufacturersAction => ({
    type: ACTIONS.REFRESH_MANUFACTURERS,
    payload: manufacturers
});
