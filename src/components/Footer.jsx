import "../styles/Footer.scss";
import Address from "../assets/img/address.png";
import Email from "../assets/img/email.png";
import Phone from "../assets/img/phone.png";
import fa from "../assets/img/fa.png";
import tw from "../assets/img/tw.png";
import ins from "../assets/img/ins.png";
import lin from "../assets/img/lin.png";
import MainButton from "./MainButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="addressbar">
          <div className="contacts">
            <div className="head-office">
              <div className="icon">
                <img src={Address} alt="address" />
              </div>
              <div className="info">
                <p>Head office</p>
                <p className="head-office-short">Los Angeles, California</p>
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
        <div className="copyright">
          <p className="info">Copyright © 2022 - ICVR.IO</p>
          <div className="terms">
            <p>Privacy Policy </p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
