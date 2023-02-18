import "./TabItem.scss";

const TabItem = ({
  img,
  name,
  title,
  subtitle,
  onPush,
  style,
  activeStyle,
}) => {
  return (
    <div
      className="TabItem"
      id={name}
      onClick={onPush}
      style={{ background: activeStyle === name ? style : null }}
    >
      <div className="tab-img">
        <img src={img} alt="" />
      </div>
      <div className="tab-info">
        <p className="tab-subtitle">{subtitle}</p>
        <h3 className="tab-title">{title}</h3>
      </div>
      <div className="bottom-line" style={{ background: style }}></div>
    </div>
  );
};

export default TabItem;
