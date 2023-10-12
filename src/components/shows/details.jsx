
const Details = ({status,premiered,network}) => {
  return (
    <div>
     
      <div>
        {network ? 'Premeired on:' + network.name : ''}n
        {network ? 'in ' + network.country.name : ''}
      </div>
      <div>show Status:{status}</div>
    </div>
  );
};

export default Details;
