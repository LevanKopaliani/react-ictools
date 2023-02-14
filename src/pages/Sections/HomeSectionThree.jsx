import "../../styles/HomeSectionThree.scss";
import PartnerImg1 from "../../assets/img/partnersimage1.png";
import PartnerImg2 from "../../assets/img/partnersimage2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ClientsData from "../../assets/data/ClientsData";
const HomeSectionThree = () => {
  return (
    <section className="HomeSectionThree">
      <div className="wrapper">
        <div className="container">
          <div className="sectionthree-container">
            <div className="sectionthree-text">
              <h1 className="title">
                We{"’"}re in Good
                <br />
                Company
              </h1>
              <p className="subtitle">
                We partner with industry leaders to push the boundaries of game
                development and virtual production through our Unity and Unreal
                Engine game engines.
              </p>
            </div>
            <div className="partners-block">
              <h1 className="partners-title title">Partners</h1>
              <div className="partners-content">
                <div className="content-item">
                  <div className="content-item-img">
                    <img src={PartnerImg1} alt="partner" />
                  </div>
                  <div className="content-item-text">
                    <h4>
                      We are an authorized service
                      <br />
                      partner of Unreal Engine
                    </h4>
                    <p>
                      Epic Games recognizes our engineers
                      <br />
                      and artist as some of the best in the world
                    </p>
                  </div>
                </div>
                <div className="content-item">
                  <div className="content-item-img">
                    <img src={PartnerImg2} alt="partner" />
                  </div>
                  <div className="content-item-text">
                    <h4>
                      We're no strangers
                      <br />
                      to Unity as well
                    </h4>
                    <p>
                      Our team creates world-class
                      <br />
                      projects using the Unity platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clients-block">
              <h1 className="title">clients</h1>
              <div className="clients-swipper">
                <Swiper
                  className="mySwipper"
                  slidesPerView={"auto"}
                  freeMode={true}
                  spaceBetween={160}
                  centeredSlides={false}
                >
                  {ClientsData.map((it, index) => (
                    <SwiperSlide key={index}>
                      <div className="swipper-item">
                        <img src={it.clientimg} alt="client" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;
