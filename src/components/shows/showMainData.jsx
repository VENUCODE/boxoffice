

const ShowMainData=({image,name,rating,summary,genres})=>{
    return <div>
         <img src={image?.original} alt={name} />
      <h1>{name}</h1>
      <div dangerouslySetInnerHTML={{ __html: summary }}></div>
      <h1>Details</h1>
      <div>
        Genres:
        {genres.map(item => (
          <span key={item}>{item} </span>
        ))}
      </div>
      <div> Rating:{rating.average || 'no-rating yet'}</div>
      
    </div>
}
export default ShowMainData;