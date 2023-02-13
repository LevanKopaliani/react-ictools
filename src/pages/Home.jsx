import MainButton from "../components/MainButton";
import "../styles/Home.scss";

const Home = () => {
  return (
    <main className="homepage">
      <section className="homepage-section">
        <div className="wrapper">
          <div className="container">
            <div className="homepage-container">
              <h1 className="title">
                Leading edge <br />
                Real-Time
                <br />
                <span>Production Tools</span>
                <br />
                at Your Fingertips
              </h1>
              <p className="subtitle">
                Our real-time production plugins we’re created to empower
                creatives and streamline the workflow from We believe that
                engineering empowers creatives and creatives drive engineers to
                innovate.
              </p>
              <p className="sub-subtitle">Ready to empower your creatives?</p>
              <MainButton text={"Request a demo today"} type={"mainbutton"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
