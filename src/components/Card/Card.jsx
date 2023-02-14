import "./Card.scss";

const Card = ({ img, title, subtitle }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="card" />
      </div>
      <div className="card-text">
        <h2 className="card-title">{title}</h2>
        <p className="card-subtitle">{subtitle}</p>
        <p className="card-link">learn more</p>
      </div>
    </div>
  );
};

export default Card;
