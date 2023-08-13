import { legacy_createStore as createStore, combineReducers, Store, applyMiddleware } from 'redux';

import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';


const reducer = combineReducers({  });
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// 退出重置redux
const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return reducer(state, action);
};

// 挂载redux
const store: Store = createStore(rootReducer, middleWares);

export { store };