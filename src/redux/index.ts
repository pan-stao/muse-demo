// import { legacy_createStore as createStore, combineReducers, Store, applyMiddleware } from 'redux';
import { createStore,  } from "redux";
import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// const middleWare = [thunk];
// const initialState = {};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["loading"], //设置某个reducer数据不持久化，
  //注意单词的拼写！我就因为写错单词，找了半天,55555~
};

const myPersistReducer = persistReducer(persistConfig, rootReducer)
 
const store = createStore(myPersistReducer)
 
const persistor = persistStore(store)


// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleWare),
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//       (window as any).__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// const reducer = combineReducers({  });
// const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// // 退出重置redux
// const rootReducer = (state: any, action: any) => {
//   if (action.type === 'USER_LOGOUT') {
//     state = undefined;
//   }
//   return reducer(state, action);
// };

// // 挂载redux
// const store: Store = createStore(rootReducer, middleWares);

export { store,persistor };
