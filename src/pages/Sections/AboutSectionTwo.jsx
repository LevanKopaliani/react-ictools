import "../../styles/AboutSectionTwo.scss";
import bird0 from "../../assets/img/card/card0.png";
import bird1 from "../../assets/img/card/card1.png";
import bird2 from "../../assets/img/card/card2.png";
import bird3 from "../../assets/img/card/card3.png";

const AboutSectionTwo = () => {
  return (
    <section className="AboutSectionTwo">
      <div className="wrapper">
        <div className="container">
          <div className="sectiontwo-container">
            <h1 className="title">
              What's up
              <br /> with the birds?
            </h1>
            <p className="subtitle small-screen">
              ICTool is a cutting-edge software company that creates real-time
              ecosystems for creative studios of all sizes
            </p>
            <div className="content">
              <div className="birds">
                <div className="birds-group1">
                  <div className="birds-item">
                    <img src={bird0} alt="" />
                  </div>
                  <div className="birds-item">
                    <img src={bird2} alt="" />
                  </div>
                </div>
                <div className="birds-group2">
                  <div className="birds-item">
                    <img src={bird1} alt="" />
                  </div>
                  <div className="birds-item">
                    <img src={bird3} alt="" />
                  </div>
                </div>
              </div>
              <div className="text">
                <p className="subtitle">
                  ICTool is a cutting-edge software company that creates
                  real-time ecosystems for creative studios of all sizes
                </p>
                <p className="sub-subtitle">
                  Inspired by the tenaciously innate traits and characteristics
                  <br />
                  of birds, their ability to thrive in a wide variety of
                  ecosystems, and their rapid ability to adjust to changes in
                  their environment, they closely resemble the heart of our team
                  and the final output of our unprecedented products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
