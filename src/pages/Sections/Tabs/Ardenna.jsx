import MainButton from "../../../components/MainButton";
import "./Ardenna.scss";
import Pic from "../../../assets/img/picup.png";

const Ardenna = () => {
  return (
    <div className="ardenna">
      <div className="ardenna-info">
        <h1 className="title">How can Ardenna help you?</h1>
        <div className="ardena-info-img">
          <img src={Pic} alt="" />
        </div>
        <ul className="ardena-list">
          <li className="list-item">
            <h3>Powerful API</h3>
            <p>
              Our out-of-the-box solution is designed for developers and is
              fully extendable with a plugin API and fully-scalable
              microservice-based architecture.
            </p>
          </li>
          <li className="list-item">
            <h3>Source Code Access</h3>
            <p>
              Source Code Access Authentication options that are nfinitely more
              flexible than any other solution on the market. Exclusive
              real-time pixel streaming provides the lowest latency in its
              class.
            </p>
          </li>
          <li className="list-item">
            <h3>Cloud Agnostic</h3>
            <p>
              Reduce your costs by eliminating the need to ship your source code
              or build. Deploy on any cloud or your own GPUs.
            </p>
          </li>
        </ul>
        <MainButton text={"Request a demo today"} type={"ardena-tab-button"} />
      </div>
      <div className="ardenna-img-container">
        <div className="ardenna-img">
          <img src={Pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ardenna;
