import { Link, useParams } from 'react-router-dom';
import useShowById from '../hooks/getShowById';
import ShowMainData from '../components/shows/showMainData';
import Details from '../components/shows/details';
import Seasons from '../components/shows/seasons';
import Casts from '../components/shows/casts';
const Show = () => {
  const { showId } = useParams();
  const [showError, showData] = useShowById(showId);
  if (showData) {
    return (
      <div>
        <Link to="/">Go back to Home</Link>
        <div>
          <ShowMainData
            image={showData.image}
            name={showData.name}
            rating={showData.rating}
            summary={showData.summart}
            genres={showData.genres}
          />
        </div>
        <div>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <Casts easons={showData._embedded.seasons} />
        </div>
      </div>
    );
  } else {
    <div>Error Recieveed : {showError}</div>;
  }
  return (
    <div>{showData ? <div>{showData.summary}</div> : <p>Loading...</p>}</div>
  );
};
export default Show;
