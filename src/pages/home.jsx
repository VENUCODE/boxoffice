import { useState } from 'react';
import { searchPerson, searchShow } from '../api/tvmaze';
import SearchForm from '../components/searchForm';
import ActorsGrid from '../components/actors/actorsGrid';
import ShowGrid from '../components/shows/showGrid';
const Home = () => {
  const [apiData, setApidata] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const searchStr = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);
      if (searchOption == 'shows') {
        const result = await searchShow(q);
        setApidata(result);
      } else {
        const result = await searchPerson(q);
        setApidata(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderData = () => {
    if (apiDataError) {
      return <div>Error: {apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No such data found</div>;
    }
    if (apiData) {
      return apiData[0].person ? <ActorsGrid data={apiData}/> : <ShowGrid data={apiData} />;
    }
    return null;
  };

  return (
    <div>
      <div> This is Home page</div>
      <SearchForm searchStr={searchStr} />
      <div>{renderData()}</div>
    </div>
  );
};
export default Home;
