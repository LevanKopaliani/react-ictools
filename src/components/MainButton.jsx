import "../styles/MainButton.scss";

const MainButton = ({ text, type }) => {
  return (
    <div className="MainButton">
      <button className={type}>{text}</button>
    </div>
  );
};

export default MainButton;
