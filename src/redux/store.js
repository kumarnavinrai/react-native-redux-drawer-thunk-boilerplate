import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CountReducer from './reducers/countReducer';
import userReducer from './reducers/userReducer';
import scanReducer from './reducers/scanReducer';

const rootReducer = combineReducers({
  count: CountReducer,
  user: userReducer,
  scan: scanReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
