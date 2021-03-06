import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const configureStore = preloadedState => {
  return createStore(RootReducer,preloadedState,applyMiddleware(...middlewares));
};

export default configureStore;
