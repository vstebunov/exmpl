import { createStore, Store } from 'redux';
import StoreReducer from './reducer';
import { StoreData, StoreAction } from './types';

const dataStore: Store<StoreData, StoreAction> = createStore(StoreReducer);

export default dataStore;
