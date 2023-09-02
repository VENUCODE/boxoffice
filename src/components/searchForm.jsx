import { useState,useEffect } from 'react';
const SearchForm=({searchStr})=>{
  const [searchInput, setsearchInput] = useState('');
  const [searchOption, setSearchOption] = useState('shows');
  console.log("Component rerender")
  useEffect(()=>{
    console.log('mounts:',searchOption)
    return ()=>{console.log("component unmounts",searchOption)}
  },[searchOption])
  const inputStr = e => {
    setsearchInput(e.target.value);
  };
  const handleSearchOption = e => {
    setSearchOption(e.target.value);
  };const onSubmit=e=>{
    e.preventDefault();
    const object={q:searchInput,searchOption};
    searchStr(object)
  }
  
  return(
    <form onSubmit={onSubmit}>
    <input
      type="text"
      value={searchInput}
      onChange={inputStr}
      placeholder="Search Movie"
    />
    <label>
      <input
        type="radio"
        name="search-option"
        onChange={handleSearchOption}
        value="shows"
        checked={searchOption=='shows'}
      />
      shows
    </label>
    <label>
      <input
        type="radio"
        name="search-option"
        onChange={handleSearchOption}
        value="actors"
        checked={searchOption=='actors'}
      />
      actors
    </label>
    <button type="submit">Search</button>
  </form>
  )
}
export default SearchForm;