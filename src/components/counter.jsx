import { useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0)
    const incrementCount=()=>{
        setCount(()=>count+1)
    }
    const resetCount=()=>{
        setCount(()=>0)
    }
    return <div>
    <h1>{count}</h1>
    <button onClick={incrementCount}>Click</button>
    <button onClick={resetCount}>ResetCount</button>
    </div>
}
export default Counter;