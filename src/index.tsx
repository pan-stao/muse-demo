import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';
import { store ,persistor} from './redux';
import reportWebVitals from './reportWebVitals';
import './mock/list.js';

import {PersistGate} from 'redux-persist/integration/react'


import '@/styles/common.less'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
      <App />
    </StyleProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
