import { Link } from 'react-router-dom';
import image_not_found from '../../assets/image_not_found.png'
const ShowCard = ({
  name,
  id,
  image ,
  summary,
}) => {
 
  return (
     
    <div key={id}><hr /><hr />
      <h2>{name}</h2>
     
      <img alt="No image" src={image?image:image_not_found} />
      <p>{summary?.split(' ').slice(0,10).join(' ').replace(/<[^>]*>/g, '')}</p>
      <Link to={`/show/+${id}`}>Read More</Link>
      <button>Star me</button>
    </div>
  );
};
export default ShowCard;