import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

export default function Box(props) {
    let dispatch = useDispatch();
    let boxColor = useSelector(state=>state.backgroundColor)
    let singleColor = useSelector(state=>state.boxList[props.id])
    let changeSingleBoxColor = (color)=>{
        dispatch({type:'SINGLECOLOR',payload: {color:color,id:props.id}})
    }
    return (
        <div style={{
            width: "300px",
            height:"100px", 
            border:'1px solid black', 
            margin: 'auto',
            marginTop: '10px',
            marginBottom: '10px',
            backgroundColor: singleColor===''?boxColor:singleColor}}>
            <input onChange={(e)=>{changeSingleBoxColor(e.target.value)}}/>
        </div>
    )
}
