import "./Shearwater.scss";
import Clock from "../../../assets/img/clock.png";
import ArrowL from "../../../assets/img/arrowl.png";
import Arrow from "../../../assets/img/arrow.png";

// swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//

const Shearwater = () => {
  return (
    <div className="shearwater">
      <div className="head-container">
        <h1 className="title">How can Shearwater help you?</h1>
        <div className="workflow-blocks">
          <div className="traditional">
            <img src={Clock} alt="Clock" />
            <p className="workflow-subtitle">Traditional Workflow</p>
            <h3 className="workflow-title">50m</h3>
          </div>
          <div className="divider-l">
            <img src={ArrowL} alt="" />
          </div>
          <div className="icvr">
            {/* <svg class="progressbar__svg">
              <circle
                cx="75"
                cy="75"
                r="75"
                class="progressbar__svg-circle circle-css "
              ></circle>
            </svg> */}
            <img src={Clock} alt="Clock" />
            <p className="workflow-subtitle">With ICVR</p>
            <h3 className="workflow-title">5m</h3>
          </div>
        </div>
      </div>
      <div className="workflow-container">
        <div className="workflow-swipper-container">
          <Swiper
            className="workflow-swipper"
            slidesPerView={"auto"}
            freeMode={true}
            spaceBetween={15}
            centeredSlides={false}
            draggable={true}
          >
            <SwiperSlide>
              <div className="workflow-swiper-item">
                <p className="swiper-item-title">swiper-item</p>
                <p className="swiper-item-subtitle">
                  Access a powerful workstation
                </p>
              </div>
              <div className="divider-arrow">
                <img src={Arrow} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Shearwater;
