import "./TabItem.scss";

const TabItem = ({ img, name, title, subtitle, style }) => {
  return (
    <div className="TabItem" name={name} style={{ background: style }}>
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
