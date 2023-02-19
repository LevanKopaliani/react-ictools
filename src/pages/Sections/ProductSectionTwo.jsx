import { useState } from "react";
import TabItem from "../../components/TabItem/TabItem";
import TabItemData from "../../components/TabItem/TabItemData";
import "../../styles/ProductSectionTwo.scss";
// swipper //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//Tabs
import Ardenna from "./Tabs/Ardenna";
import Shearwater from "./Tabs/Shearwater";
//

const ProductSectionTwo = () => {
  const [activeTable, setActiveTable] = useState("Ardenna");

  const [activeCategory, setActiveCategory] = useState("Development");

  function handleActiveCategory(e) {
    e.stopPropagation();
    setActiveCategory(e.currentTarget.id);
    e.currentTarget.id === "Development"
      ? setActiveTable("Ardenna")
      : setActiveTable("Accipiter");
  }

  function handleActiveTable(e) {
    e.stopPropagation();
    setActiveTable(e.currentTarget.id);
  }

  return (
    <section className="ProductSectionTwo">
      <div className="tabs">
        <div className="wrapper">
          <div className="container">
            <div className="tabs-container">
              <div className="category-swipper">
                <Swiper
                  className="categorySwipper"
                  slidesPerView={"auto"}
                  freeMode={true}
                  spaceBetween={30}
                  centeredSlides={false}
                  draggable={true}
                >
                  <SwiperSlide>
                    <div
                      className="category"
                      id="Development"
                      onClick={handleActiveCategory}
                    >
                      <h2>Development</h2>
                      <span className="dev-category-line"></span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="category"
                      id="Pre-Production"
                      onClick={handleActiveCategory}
                    >
                      <h2>Pre-Production</h2>
                      <span className="pre-category-line"></span>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="tab-swipper-container">
                <Swiper
                  className="tabsSwipper-category"
                  slidesPerView={"auto"}
                  freeMode={true}
                  spaceBetween={20}
                  centeredSlides={false}
                >
                  {TabItemData.filter(
                    (item) => item.category === activeCategory
                  ).map((item, index) => (
                    <SwiperSlide key={index}>
                      <TabItem
                        img={item.img}
                        name={item.name}
                        title={item.title}
                        subtitle={item.subtitle}
                        subSubtitle={item.subSubtitle}
                        key={index}
                        style={item.activeColor}
                        onPush={handleActiveTable}
                        activeStyle={activeTable}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  className="tabsSwipper"
                  slidesPerView={"auto"}
                  freeMode={true}
                  spaceBetween={20}
                  centeredSlides={false}
                >
                  {TabItemData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <TabItem
                        img={item.img}
                        name={item.name}
                        title={item.title}
                        subtitle={item.subtitle}
                        key={index}
                        style={item.activeColor}
                        onPush={handleActiveTable}
                        activeStyle={activeTable}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-content">
        <div className="wrapper">
          <div className="container">
            <div className="tabs-content-container">
              {activeTable === "Ardenna" && <Ardenna />}
              {activeTable === "Shearwater" && <Shearwater />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSectionTwo;
