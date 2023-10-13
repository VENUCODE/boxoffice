
const Details = ({status,network,premiered,language}) => {
  return (
    <div>
      <div>
        {network ? ' Premeired on: ' + network.name : ''}
        {network ? ' in ' + network.country?.name : ''}
      </div>
      <div>show Status:{status}</div>
      <p>Language: ||{language}</p>
    </div>
  );
};

export default Details;
