import { combineReducers } from 'redux';
import analysisReducer from './analysis/reducer';

const rootReducer = combineReducers({
    analysis: analysisReducer
});

export default rootReducer;
