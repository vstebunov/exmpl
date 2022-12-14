import { Action } from 'redux';
import { Manufacturer } from '../manufacturers/manufacturer';

export interface StoreData {
  manufacturers: Manufacturer[]
}

export enum ACTIONS {
  REFRESH_MANUFACTURERS,
}

export interface RefreshManufacturersAction extends Action<ACTIONS.REFRESH_MANUFACTURERS> {
  payload: Manufacturer[]
}

export type StoreAction = RefreshManufacturersAction;
