import { ACTIONS, RefreshManufacturersAction } from './types';
import { Manufacturer } from '../manufacturers/manufacturer';

const refreshManufacturers = (...manufacturers: Manufacturer[]): RefreshManufacturersAction => ({
  type: ACTIONS.REFRESH_MANUFACTURERS,
  payload: manufacturers,
});

export default refreshManufacturers;
