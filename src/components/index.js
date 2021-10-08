import "./styles.css";

const Card = ({ infoData }) => {
  return (
    <div className="container">
      {infoData &&
        infoData.map((personagens) => (
          <div className="paper">
            <div className="info">
              <img className="imgPP" src={personagens.image} />
              <h3>{personagens.name}</h3>
              <p> species: {personagens.species}</p>
              <p> location: {personagens.origin?.name} </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
