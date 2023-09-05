import { useParams } from 'react-router-dom';
import useShowById from '../hooks/getShowById';

const Show = () => {
  const { showId } = useParams();
  const [showError,showData]=useShowById(showId)
  console.log(showData)
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
