import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { persistStore } from 'redux-persist'
import { store } from './state/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>

    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
