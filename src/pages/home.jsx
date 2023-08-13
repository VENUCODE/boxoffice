import { useState } from 'react';
import { searchPerson, searchShow } from '../api/tvmaze';
const Home = () => {
  const [searchInput, setsearchInput] = useState('');
  const [apiData, setApidata] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const inputStr = e => {
    setsearchInput(e.target.value);
  };
  const handleSearchOption = e => {
    setSearchOption(e.target.value);
  };
  const searchStr = async e => {
    e.preventDefault();
    try {
      setApiDataError(null);
      if (searchOption == 'shows') {
        const result = await searchShow(searchInput);
        setApidata(result);
      } else {
        const result = await searchPerson(searchInput);
        setApidata(result);
    
      }
      
      
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderData = () => {
    if (apiDataError) {
      console.log(apiDataError)
      return <div>Error: {apiDataError.message}</div>;
    }
    if (apiData) {
      return (
        <ol>
          {apiData[0].person?apiData.map(data => (
            <li key={data.person.id}>{data.person.name}</li>
          )):apiData.map(data => (
            <li key={data.show.id}>{data.show.name}</li>
          ))
          }
        </ol>
      );
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
      <div>{renderData()}</div>
    </div>
  );
};
export default Home;
