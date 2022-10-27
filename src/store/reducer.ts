import { ACTIONS, StoreData, StoreAction } from './types';
import { Reducer } from 'redux';

export const StoreReducer: Reducer<StoreData, StoreAction>
    = (data: StoreData | undefined, action) => {
        data = data || { manufacturers: [] }
        switch(action.type) {
            case ACTIONS.REFRESH_MANUFACTURERS:
                return {
                    ...data,
                    manufacturers: [...action.payload]
                };

            default:
                return data;
        }
    }
