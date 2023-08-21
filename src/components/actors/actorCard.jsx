import image_not_found from '../../assets/image_not_found.png';
const ActorCard = ({ name, id, image=image_not_found,status, gender, dob, country }) => {
  return (
    
    <div key={id}>
      <h2>
        {name}  ({gender})</h2>
        <h5>
          Born on :{dob} 
        </h5>
        <p>{status}</p>
        <h5>{country}</h5>
      <img alt="No image" src= {image}/>
    </div>
  );
};
export default ActorCard;
