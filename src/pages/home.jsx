import { useState } from 'react';
import { searchPerson, searchShow } from '../api/tvmaze';
import SearchForm from '../components/searchForm';
const Home = () => {
  const [apiData, setApidata] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
 
  const searchStr = async ({q,searchOption}) => {

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
     <SearchForm searchStr={searchStr}/>
      <div>{renderData()}</div>
    </div>
  );
};
export default Home;
