import MainButton from "../../components/MainButton";
import "../../styles/AboutSectionFour.scss";
import Team from "../../assets/img/team.png";

const AboutSectionFour = () => {
  return (
    <section className="AboutSectionFour">
      <div className="">
        <div className="">
          <div className="sectionfour-container ">
            <div className="info wrapper">
              <h1 className="title">
                Join Our <br />
                Award-Winning
                <br />
                Team
              </h1>
              <p className="subtitle">
                Are you a talented developer or creative? View our job openings
                or submit your
                <br />
                resume for consideration.
              </p>
              <MainButton text={"View Careers"} type={"sectionfour-button"} />
            </div>
            <div className="team-img">
              <img src={Team} alt="team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
