import { ACTIONS, StoreData, StoreAction } from './types';
import { Reducer } from 'redux';

export const StoreReducer: Reducer<StoreData, StoreAction>
    = (data: StoreData | undefined, action) => {
        data = data || { manufacturers: [] }
        switch(action.type) {
            case ACTIONS.REFRESH_MANUFACTURERS:
                console.log(action, data);
                return {
                    ...data,
                    manufacturers: [...action.payload]
                };

            default:
                return data;
        }
    }
