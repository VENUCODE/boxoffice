import { useState } from "react";
const Home=()=>{
    
    const [searchInput,setsearchInput]=useState('');
    const inputStr=(e)=>{
            setsearchInput(e.target.value)
    } 
    const searchStr=async (e)=>{
        e.preventDefault();
        const response =await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`);
        const body=response.json()
        console.log(body)

    }
  
    return (
      <div>
        <div> This is Home page</div>
        <div>{searchInput}</div>
        <form onSubmit={searchStr}>
          <input
            type="text"
            value={searchInput}
            onChange={inputStr}
            placeholder="Search Movie"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
}
export default Home;