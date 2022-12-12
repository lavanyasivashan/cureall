import React,{useEffect, useState} from 'react'

function HooksEx() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title="hi";
        setCount(count+0)
        console.log({count})
    })
    let inc=()=>{
        setCount(count+1)
    }
  return (
    <div>
    {count}
    <button onClick={()=>{setCount(count+1)}}>ClickMe</button>
    <button onClick={()=>setCount(count-1)}>ClickMe</button>
    </div>
  )
}
export default HooksEx; 
