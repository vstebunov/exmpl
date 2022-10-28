import { Reducer } from 'redux';
import { ACTIONS, StoreData, StoreAction } from './types';

type SR = Reducer<StoreData, StoreAction>;

const StoreReducer: SR = (storedata: StoreData | undefined, action) => {
  const data = storedata || { manufacturers: [] };
  switch (action.type) {
    case ACTIONS.REFRESH_MANUFACTURERS:
      return {
        ...data,
        manufacturers: [...action.payload],
      };

    default:
      return data;
  }
};

export default StoreReducer;
