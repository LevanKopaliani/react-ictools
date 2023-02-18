import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import "../styles/NavBar.scss";
import { IconContext } from "react-icons";
import Logo from "../assets/img/Logo.png";
import LogoText from "../assets/img/LogoText.png";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import MainButton from "./MainButton";
/// menu footer //
import Address from "../assets/img/address.png";
import Email from "../assets/img/email.png";
import Phone from "../assets/img/phone.png";
import fa from "../assets/img/fa.png";
import tw from "../assets/img/tw.png";
import ins from "../assets/img/ins.png";
import lin from "../assets/img/lin.png";

//////////////

const NavBar = () => {
  let [checked, setChecked] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  useEffect(() => {
    const body = document.getElementById("navbar").parentNode;

    mobileMenu ? (body.className = "menu-open") : (body.className = "");
  }, [mobileMenu]);

  return (
    <IconContext.Provider value={{ color: "#29BEC8" }}>
      <div className="navbar" id="navbar">
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
                  to="/product"
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
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-links activated" : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
              </li>
              <div className="menu-footer">
                <MainButton
                  text={"request demo today"}
                  type={"nav"}
                  modal={true}
                />
                <div className="addressbar">
                  <div className="contacts">
                    <div className="head-office">
                      <div className="icon">
                        <img src={Address} alt="address" />
                      </div>
                      <div className="info">
                        <p>Head office</p>
                        <p className="head-office-short">
                          Los Angeles, California
                        </p>
                        <p className="full-address">
                          10817 Santa Monica Blvd
                          <br />
                          Ste. 310 , Los Angeles CA 90025
                        </p>
                      </div>
                    </div>
                    <div className="email">
                      <div className="icon">
                        <img src={Email} alt="address" />
                      </div>
                      <div className="info">
                        <p>Email</p>
                        <p>info@icvr.io</p>
                      </div>
                    </div>
                    <div className="phone">
                      <div className="icon">
                        <img src={Phone} alt="address" />
                      </div>
                      <div className="info">
                        <p>Phone</p>
                        <p>+1 (310) 489-0185</p>
                      </div>
                    </div>
                  </div>
                  <div className="social">
                    <div className="social-links">
                      <img src={fa} alt="Facebook" />
                      <img src={tw} alt="Tweeter" />
                      <img src={ins} alt="Instagram" />
                      <img src={lin} alt="Linkedin" />
                    </div>
                    <MainButton type={"subscribe-button"} text="Subscribe" />
                  </div>
                </div>
              </div>
            </ul>
            <div className="nav-buttons-container">
              <ToggleSwitch
                className={"Swicher"}
                Name="ToggleSwitch"
                checked={checked}
                onChange={setChecked}
              />
              <MainButton
                text={"Book a consultation"}
                type={"nav"}
                modal={true}
              />
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
