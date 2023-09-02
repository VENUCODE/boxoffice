import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';
const Show = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }

    fetchData();
  }, [showId]);
  if (showData) {
    return <div>Data Recieved :{showData.name}</div>;
  } 
  else {
    <div>Error Recieveed : {showError}</div>;
  }
  return (
    <div>{showData ? <div>{showData.summary}</div> : <p>Loading...</p>}</div>
  );
};

export default Show;
