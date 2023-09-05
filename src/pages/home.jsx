import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchPerson, searchShow } from '../api/tvmaze';
import SearchForm from '../components/searchForm';
import ActorsGrid from '../components/actors/actorsGrid';
import ShowGrid from '../components/shows/showGrid';
const Home = () => {
  const [filter, setFilter] = useState(null);
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchShow(filter.q)
        : searchPerson(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus:false,
  });

  const searchStr = async ({ q, searchOption }) => {
    setFilter({q, searchOption});
  };

  const renderData = () => {
    if (apiDataError) {
      return <div>Error: {apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No such data found</div>;
    }
    if (apiData) {
      return apiData[0].person ? (
        <ActorsGrid data={apiData} />
      ) : (
        <ShowGrid data={apiData} />
      );
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
