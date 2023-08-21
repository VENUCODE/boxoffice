import ActorCard from './actorCard';
import image_not_found from '../../assets/image_not_found.png';
const ActorsGrid = ({ data }) => {
  return (
    <div className="">
      {data.map(item => (
        <ActorCard
          key={item.person.id}
          name={item.person.name}
          dob={item.person.birthday ? item.person.birthday : '--'}
          gender={item.person.gender ? item.person.gender : '--'}
          id={item.person.id}
          image={item.person.image ? item.person.image.medium : image_not_found}
          status={item.person.deathday ? 'Dead': 'Alive'}
          country={item.person.country ? item.person.country.name : '--'}
        />
      ))}
    </div>
  );
};
export default ActorsGrid;
