import MainButton from "../components/MainButton";
import "../styles/About.scss";
import AboutSectionFifth from "./Sections/AboutSectionFifth";
import AboutSectionFour from "./Sections/AboutSectionFour";
import AboutSectionthree from "./Sections/AboutSectionthree";
import AboutSectionTwo from "./Sections/AboutSectionTwo";

const About = () => {
  return (
    <main className="About">
      <section className="about-section">
        <div className="wrapper">
          <div className="container">
            <div className="about-container">
              <div className="about-text">
                <h1 className="title">
                  Empowering
                  <br />
                  Creatives with
                  <br />
                  Next Generation <br />
                  Technology
                </h1>
                <p className="subtitle">
                  ICTools was born from the frustration of addressing our own
                  <br /> pain points as we worked to bring our client`s vision
                  to life.
                </p>
                <p className="sub-subtitle">
                  Our plugins and tools have been the internal IP behind <br />
                  award-winning films and games.
                </p>
                <p className="sub-subtitle">
                  We're on a mission to build an ecosystem of real-time
                  <br />
                  production tools to empower every creative, every day.
                </p>
              </div>
              <MainButton text={"Request a demo today"} type={"mainbutton"} />
            </div>
          </div>
        </div>
      </section>
      <AboutSectionTwo />
      <AboutSectionthree />
      <AboutSectionFour />
      <AboutSectionFifth />
    </main>
  );
};

export default About;
