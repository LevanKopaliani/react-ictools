import MainButton from "../../../components/MainButton";
import "./Eclectus.scss";
import EclectusImg from "../../../assets/img/electus.png";

const Eclectus = () => {
  return (
    <div className="eclectus">
      <h1 className="title">
        How can our Virtual
        <br /> Production Suite help you?
      </h1>
      <div className="eclectus-container">
        <div className="eclectus-list-container">
          <ul className="eclectus-list">
            <li className="list-item">
              <h3>Automation</h3>
              <p>
                Our end-to-end real-time tool stack saves time by eliminating
                learning curves for tasks and reduces pipeline breakage while
                supporting seamless integration across teams.
              </p>
            </li>
            <li className="list-item">
              <h3>Reduce Time Waste</h3>
              <p>
                Reduce Time Waste Save the teams' time and improve their
                collective velocity by reducing or eliminating task redundancies
                and learning curves for traditional manual tasks that have been
                automated in this powerful tool.
              </p>
            </li>
            <li className="list-item">
              <h3>Enterprise-Level Studio Tools</h3>
              <p>
                Gain access to the same tools used by the world’s largest
                production studios.
              </p>
            </li>
          </ul>
          <MainButton text={"Request a demo today"} type={"eclectus-button"} />
        </div>

        <dir className="eclectus-img">
          <img src={EclectusImg} alt="" />
        </dir>
      </div>
    </div>
  );
};

export default Eclectus;
