import "./Shearwater.scss";
import Clock from "../../../assets/img/clock.png";
import ArrowL from "../../../assets/img/arrowl.png";
import Arrow from "../../../assets/img/arrow.png";
import icvrArrow from "../../../assets/img/icvrarrow.png";

// swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MainButton from "../../../components/MainButton";

//

const Shearwater = () => {
  return (
    <div className="shearwater">
      <div className="head-container">
        <h1 className="title">How can Shearwater help you?</h1>
        <div className="workflow-blocks">
          <div className="traditional">
            <img src={Clock} alt="Clock" />
            <p className="workflow-subtitle">
              Traditional
              <br /> Workflow
            </p>
            <h3 className="workflow-title">50m</h3>
          </div>
          <div className="divider-l">
            <img src={ArrowL} alt="" />
          </div>
          <div className="icvr">
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
            spaceBetween={14}
            centeredSlides={false}
            draggable={true}
            // grid={{
            //   rows: 2,
            // }}
            // modules={[Grid]}
          >
            {/* <div className="icvr-swiper-item">
                <p className="swiper-item-title">With ICVR</p>
                <p className="swiper-item-subtitle">Use any computer</p>
              </div> */}
            <SwiperSlide>
              <div className="workflow-swiper-item">
                <p className="swiper-item-title">Traditional Workflow</p>
                <p className="swiper-item-subtitle">
                  Access a powerful workstation
                </p>
              </div>
              <div className="divider-arrow">
                <img src={Arrow} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time">
                <img src={Clock} alt="" />
                <span>10m</span>
              </div>
              <div className="workflow-swiper-item">
                <p className="swiper-item-subtitle">
                  Download & Install Unreal
                </p>
              </div>
              <div className="divider-arrow">
                <img src={Arrow} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time">
                <img src={Clock} alt="" />
                <span>6m</span>
              </div>
              <div className="workflow-swiper-item">
                <p className="swiper-item-subtitle">
                  Download & Install Perforce
                </p>
              </div>
              <div className="divider-arrow">
                <img src={Arrow} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time">
                <img src={Clock} alt="" />
                <span>2m</span>
              </div>
              <div className="workflow-swiper-item">
                <p className="swiper-item-subtitle">Create a Workspace</p>
              </div>
              <div className="divider-arrow">
                <img src={Arrow} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time">
                <img src={Clock} alt="" />
                <span>20m</span>
              </div>
              <div className="workflow-swiper-item">
                <p className="swiper-item-subtitle">Download the Project</p>
              </div>
              <div className="divider-arrow">
                <img src={Arrow} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time">
                <img src={Clock} alt="" />
                <span>2m</span>
              </div>
              <div className="workflow-swiper-item">
                <p className="swiper-item-subtitle">Open UE & Locate Asset</p>
              </div>
              <div className="divider-arrow">
                <img src={Arrow} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time">
                <img src={Clock} alt="" />
                <span>5m</span>
              </div>
              <div className="workflow-swiper-item">
                <p className="swiper-item-subtitle">Compile shaders</p>
              </div>
              <div className="divider-arrow">
                <img src={Arrow} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time">
                <img src={Clock} alt="" />
                <span>5m</span>
              </div>
              <div className="workflow-swiper-item">
                <p className="swiper-item-subtitle">Write & Send feedback</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="icvr-swipper-container">
          <Swiper
            className="icvr-swipper"
            slidesPerView={"auto"}
            freeMode={true}
            spaceBetween={14}
            centeredSlides={false}
            draggable={true}
          >
            <MainButton text={"Request a demo today"} />
            <SwiperSlide>
              <div className="icvr-swiper-item">
                <p className="swiper-item-title">With ICVR</p>
                <p className="swiper-item-subtitle">Use any computer</p>
              </div>
              <div className="divider-arrow">
                <img src={icvrArrow} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time">
                <img src={Clock} alt="" />
                <span>1m</span>
              </div>
              <div className="icvr-swiper-item">
                <p className="swiper-item-subtitle">Locate asset in Shotgrid</p>
              </div>
              <div className="divider-arrow">
                <img src={icvrArrow} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time">
                <img src={Clock} alt="" />
                <span>1m</span>
              </div>
              <div className="icvr-swiper-item">
                <p className="swiper-item-subtitle">Launch ART tool</p>
              </div>
              <div className="divider-arrow">
                <img src={icvrArrow} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="time">
                <img src={Clock} alt="" />
                <span>3m</span>
              </div>
              <div className="icvr-swiper-item">
                <p className="swiper-item-subtitle">Write feedback</p>
              </div>
              {/* <div className="divider-arrow">
                <img src={Arrow} alt="" />
              </div> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="shearwater-text">
        <div className="col-one">
          <h3>
            Synchronized
            <br /> real
          </h3>
          <p>
            Synchronized real time comments Reduces time wastage in project
            management by synchronizing and leaving real-time comments.
          </p>
          <p>
            Enables creators to view any asset or scene from any computer in
            1/10th of the time.
          </p>
        </div>
        <div className="col-two">
          <h3>Automated render farm job queue</h3>
          <p>and make your render farm run more efficiently.</p>
          <p>
            Streamline the production process with built-in features like an
            asset manager, shot viewer, and render viewer.
          </p>
        </div>
        <div className="col-three">
          <h3>Reduce the risk of pipeline breakage</h3>
          <p>
            Reduce the risk of pipeline breakage. The traditional production
            pipeline is becoming increasingly expensive and inefficient.
            Breakages in the production process are costly and often result in
            lost data and wasted time.
          </p>
          <p>
            ICTool's Virtual Production Tool Suite is designed to reduce the
            risk of production breakage by providing a virtual environment that
            is more efficient and easier to control.
          </p>
        </div>
      </div>
      <MainButton type={"shearwater-button"} text={"Request a demo today"} />
    </div>
  );
};

export default Shearwater;
