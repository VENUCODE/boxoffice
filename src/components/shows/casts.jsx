import image_not_found from '../../assets/image_not_found.png'

const Casts = ({ casts }) => {
  return (
    <>
      <h1>Casts</h1>
      <div>Total Casts: {casts.length}</div>
      <div>
        {casts.map(({person,character,voice,image}, index) => (
          
          <div key={index}>
          <h2>{person.name}({character.name}) | {voice && '| voiceover'}</h2>
          <img src={character.image?character.image.medium:image_not_found}/>
          <p></p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Casts;
