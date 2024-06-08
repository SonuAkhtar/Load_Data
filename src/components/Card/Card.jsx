import "./card.css";

const Card = ({ user }) => {
  return (
    <div className="card__container">
      <h3 className="card__number">{user.id}</h3>
      <p className="card__data">{user.title}</p>
    </div>
  );
};

export default Card;
