import "../styles/DemoRequest.scss";
import MainButton from "./MainButton";

const DemoRequest = () => {
  return (
    <section className="DemoRequest">
      <div className="wrapper">
        <div className="demorequest-container">
          <div className="request-text">
            <h1 className="request-title">
              Are you ready to reach new heights by empowering your creative
              team
            </h1>
            <p className="request-subtitle">
              with the next generation of real-time production plugins and tool
              suites?
            </p>
            <ul className="request-list">
              <li className="list-item">Optimize your team's productivity</li>
              <li className="list-item">Reduce your overall costs.</li>
              <li className="list-item">Finish projects faster.</li>
            </ul>
          </div>
          <div className="request-form">
            <form action="#">
              <h2 className="form-title">Request a demo</h2>
              <p className="form-subtitle">Fill out the form and get access</p>
              <div className="form-inputs">
                <input type="text" name="firstname" placeholder="First name" />
                <input type="text" name="lastname" placeholder="Last name" />
                <input
                  type="text"
                  name="Serviceofferings"
                  placeholder="Service offerings"
                />
                <input type="email" name="email" placeholder="Email" />
              </div>
              <MainButton text={"Request a demo"} type="form-button" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequest;
