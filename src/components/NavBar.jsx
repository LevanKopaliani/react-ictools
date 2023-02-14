import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import "../styles/NavBar.scss";
import { IconContext } from "react-icons";
import Logo from "../assets/img/Logo.png";
import LogoText from "../assets/img/LogoText.png";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import MainButton from "./MainButton";

const NavBar = () => {
  let [checked, setChecked] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <IconContext.Provider value={{ color: "#29BEC8" }}>
      <div className="navbar">
        <div className="wrapper">
          <div className="navbar-container">
            <div className="nav-logo">
              <img src={Logo} alt="Logo" className="logo" />
              <img src={LogoText} alt="LogoText" className="textlogo" />
            </div>
            <div className="menu-icon" onClick={toogleMenu}>
              {mobileMenu ? <FaTimes /> : <HiBars2 />}
            </div>
            <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-links activated" : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  Homepage
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-links activated" : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-links activated" : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            <div className="nav-buttons-container">
              <ToggleSwitch
                className={"Swicher"}
                Name="ToggleSwitch"
                checked={checked}
                onChange={setChecked}
              />
              <MainButton text={"Book a consultation"} type={"nav"} />
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
