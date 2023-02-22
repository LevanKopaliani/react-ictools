import "../../styles/ProductSectionThree.scss";
import Project1 from "../../assets/img/project1.png";
import Project2 from "../../assets/img/project2.png";
import Project3 from "../../assets/img/project3.png";
//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductSectionThree = () => {
  return (
    <div className="ProductSectionThree">
      <div className="wrapper">
        <div className="container">
          <h1 className="title">past project</h1>
        </div>
      </div>
      <div className="swipper-container">
        <div className="wrapper">
          <div className="container">
            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={0}
              loop={false}
              className="projects-swipper"
            >
              <SwiperSlide>
                <div className="project-item">
                  <img src={Project3} alt="project" />
                  <div className="item-info">
                    <h3>Super Giant Robot Brothers</h3>
                    <p>Virtual Production</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-item ">
                  <img src={Project1} alt="project" />
                  <div className="item-info ">
                    <h3>Super Giant Robot Brothers</h3>
                    <p>Virtual Production</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-item">
                  <img src={Project2} alt="project" />
                  <div className="item-info">
                    <h3>Super Giant Robot Brothers</h3>
                    <p>Virtual Production</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionThree;
