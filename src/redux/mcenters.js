import * as ActionTypes from './ActionTypes';

export const Centers = (state = { 
    isLoading: true,
    errMess: null,
    centers:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CENTERS:
            return {...state, isLoading: false, errMess: null, centers: action.payload};

        case ActionTypes.CENTERS_LOADING:
            return {...state, isLoading: true, errMess: null, centers: []}

        case ActionTypes.CENTERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};