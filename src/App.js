import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {

  let countNum = useSelector(state=>state.countNum)
  
  let dispatch = useDispatch();
  let incrementNumber = ()=>{
    dispatch ({ type: 'INCREMENT', payload:3})
  }
  let decrementNumber = ()=>{
    dispatch ({type:'DECREMENT',payload:3})
  }
  let reset = ()=>{
    dispatch({type:'RESET',payload:3})
  }
  
  return (
    <div className="App">
      <p> count: {countNum} </p>
      <button onClick={()=>incrementNumber()}> INCREMENT </button>
      <button onClick={()=>decrementNumber()}> DECREMENT </button>
      <button onClick={()=>reset()}> RESET </button>
      <input />
      <div > boxes </div>
    </div>
  );
}

export default App;
