import { personalDataReducer } from './reducers/personal-data';
import { IPersonalData } from './interfaces/personal-data';
import { combineReducers } from 'redux';

export interface IAppState {
    personalData: IPersonalData;
}

export const INITIAL_STATE: IAppState = {
    personalData: {
        fullname: {
            firstName: '',
            lastName: '',
            title: ''
        },
        email: '',
        occupation: '',
        address: {
            country: '',
            postcode: ''
        }
    }
};

export const rootReducer = combineReducers({
    personalData: personalDataReducer
});

// export const store = createStore(rootReducer) as Store<IAppState>;
