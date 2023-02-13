import "./ToggleSwitch.scss";
import Moon from "../../assets/img/Moon.png";
import Sun from "../../assets/img/Sun.png";

const ToggleSwitch = ({ className, Name = "", checked, onChange }) => {
  return (
    <div className={`toggle-switch ${className}`}>
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        id={Name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="toggle-switch-label" htmlFor={Name}>
        <span className="toggle-switch-inner">
          <img src={Moon} alt="Night" className="moon" />
        </span>
        <span className="toggle-switch-inner">
          <img src={Sun} alt="Day" className="sun" />
        </span>
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
