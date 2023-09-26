const CardIndividual = (props) => {
  return (
    <div>
      <img src={props.images.large}></img>
      <div>
        <p>{props.name}</p>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default CardIndividual;
