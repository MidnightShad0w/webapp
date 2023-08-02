import { createStore } from 'redux';
import { combineReducers} from "redux";

const addressInitialState = {
    value: ''
};

function reducerAddress(state = addressInitialState, action) {
    switch(action.type) {
        case 'UPDATE_ADDRESS':
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}

const countInitialState = {
    value: 0
};

function reducerCount(state = countInitialState, action) {
    switch(action.type) {
        case 'UPDATE_COUNT':
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    addressValue: reducerAddress,
    countValue: reducerCount,
});

const store = createStore(rootReducer);

export default store;
