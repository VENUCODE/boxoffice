import image_not_found from '../../assets/image_not_found.png'

const Seasons = ({ seasons }) => {
  console.log(seasons);

  return (
    <>
      <h1>Seasons</h1>
      <div>Total seasons: {seasons.length}</div>
      <div>Total episodes: {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}</div>
      <div>
        {seasons.map((item, index) => (
          <div key={index}>season: {index+1} total no of episodes:{item.episodeOrder}</div>
        ))}
      </div>
    </>
  );
}

export default Seasons;
