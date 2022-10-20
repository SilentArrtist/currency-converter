import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import App from './App';

const defalutState = {
    valuteArray:[1,2,3],
}

const reducer = (state = defalutState,action) => {
    switch(action.type){
        
        case "SET_VALUTE":
            return {...state, valuteArray : action.data}
        default:
            return state
    }

}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <App />
    </Provider> 
);