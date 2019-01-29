import { IPersonalData } from 'src/app/interfaces/personal-data';
import { UPDATE_PERSONAL_DATA } from '../actions/personal-data';
import { tassign } from 'tassign';
import { INITIAL_STATE } from '../store';

export const personalDataReducer = (state: IPersonalData = INITIAL_STATE.personalData, action): IPersonalData => {

    switch (action.type) {
        case UPDATE_PERSONAL_DATA:
            console.log(action, 'UPDATE_PERSONAL_DATA_ACTION');
            console.log(state, 'CURRENT STATE');
            return tassign(state, action.data);
        break;
    }

    return state;
};
