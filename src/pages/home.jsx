import { useState } from 'react';
import { searchShow } from '../api/tvmaze';
const Home = () => {
  const [searchInput, setsearchInput] = useState('');
  const [apiData, setApidata] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const inputStr = e => {
    setsearchInput(e.target.value);
  };
  const searchStr = async (e) => {
    e.preventDefault();
    try {
      setApiDataError(null);
      const result = await searchShow(searchInput);
      setApidata(result)
    } catch (error) {
      setApiDataError(error);
    }
  };
  
  const renderData = () => {
    if (apiDataError) {
      return <div>Error: {apiDataError.message}</div>;
    }
    if (apiData) {
      return <ol>{apiData.map(data=><li key={data.show.id}>{data.show.name}</li>)}</ol>
    }
    return null;
  };
  

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
      <div>{renderData()}</div>
    </div>
  );
};
export default Home;
