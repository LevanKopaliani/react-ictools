import { Swiper, SwiperSlide } from "swiper/react";
import CardData from "../../assets/data/CardData";
import Card from "../../components/Card/Card";
import "../../styles/HomeSectionTwo.scss";
import "swiper/css";

const HomeSectionTwo = () => {
  return (
    <section className="HomeSectionTwo">
      <div className="wrapper">
        <div className="container">
          <div className="sectiontwo-container">
            <div className="sectiontwo-text">
              <h1 className="title">Empowering Creatives</h1>
              <p className="subtitle">
                As real-time production quickly becomes necessary in modern film
                and game development,
                <br />
                our plugins and pipeline provide a powerful foundation for your
                real-time production workflow
                <br />
                by empowering your creative teams to do better work faster and
                cost-efficiently.
              </p>
              <p className="read-more">learn more</p>
            </div>
            <div className="cards-swipper">
              <Swiper
                className="mySwipper"
                slidesPerView={"auto"}
                freeMode={true}
                spaceBetween={20}
                centeredSlides={false}
              >
                {CardData.map((it, index) => (
                  <SwiperSlide key={index}>
                    <Card
                      img={it.img}
                      title={it.title}
                      subtitle={it.subtitle}
                      key={index}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;
