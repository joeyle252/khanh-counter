import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


let initialState = {
  countNum: 0,
  
}
function countReducer (state=initialState,action){
  if (action.type==='INCREMENT') {
      state.countNum++;
  }

  else if (action.type==='DECREMENT') {
    state.countNum--;
  }
  else if (action.type==='RESET'){
    state.countNum=0;
  }
  
  return state

}
const store = createStore(countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
