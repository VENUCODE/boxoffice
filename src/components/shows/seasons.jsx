import image_not_found from '../../assets/image_not_found.png'
const Seasons = ({seasons}) => {
  return (<>
    <div>Total seasons:{seasons.length}</div>
    <div>Total episodes: {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}</div>
    <div>
        {seasons.map(season=>{
            <div key={season.id}>
                {season.image?season.image.medium:image_not_found}
                <h1>{season.name}</h1>
                <p>Aired :{season.premieredData}</p>
                <p> Ended on:{season.endDate}</p>
            </div>
        })}
    </div>
     </>
  )
}

export default Seasons