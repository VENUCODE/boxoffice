import { useState } from "react";
const Home=()=>{
    
    const [inputValue,setInputValue]=useState('');
    const handleInput=(e)=>{
        setInputValue(e.target.value)
    }
  
    return <div>
    <div>{inputValue}</div>
    <input type="text" value={inputValue} onChange={handleInput} placeholder=""/>
    <button onClick={()=>{setInputValue('changed')}}>Click to change</button>
    <div>  This is Home page</div>
    </div>
}
export default Home;