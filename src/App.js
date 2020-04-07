import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import Box from './components/Box'

function App() {

  let countNum = useSelector(state=>state.countNum)
  let boxList = useSelector(state=>state.boxList)
  let backgroundColor = useSelector(state=>state.backgroundColor)
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

  let renderBox = ()=>{
    return boxList && boxList.map((item,index)=><Box key={index} id={index}/>)
  }

  let backgroundChange = (color)=>{
    dispatch({type:'BACKGROUNDCOLOR',payload: color})
  }
  
  return (
    <div className="App">
      <p> count: {countNum} </p>
      <button onClick={()=>incrementNumber()}> INCREMENT </button>
      <button onClick={()=>decrementNumber()}> DECREMENT </button>
      <button onClick={()=>reset()}> RESET </button>
      <input onChange={e=> backgroundChange(e.target.value)} value={backgroundColor} />
      {renderBox()}
    </div>
  );
}

export default App;
