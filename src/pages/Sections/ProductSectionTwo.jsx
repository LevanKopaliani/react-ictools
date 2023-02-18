import { useState } from "react";
import TabItem from "../../components/TabItem/TabItem";
import TabItemData from "../../components/TabItem/TabItemData";
import "../../styles/ProductSectionTwo.scss";
// swipper //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//

const ProductSectionTwo = () => {
  const [activeTable, setActiveTable] = useState("Ardenna");

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

      <div className="tabs-content">
        <div className="wrapper">
          <div className="container">
            <div className="tabs-content-container">
              {activeTable === "Ardenna" && <h1>Ardenna</h1>}
              {activeTable === "Shearwater" && <h1>Shearwater</h1>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSectionTwo;
