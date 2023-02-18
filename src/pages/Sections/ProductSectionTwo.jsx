import { useState } from "react";
import TabItem from "../../components/TabItem/TabItem";
import TabItemData from "../../components/TabItem/TabItemData";
import "../../styles/ProductSectionTwo.scss";

const ProductSectionTwo = () => {
  const [activeTable, setActiveTable] = useState("Ardenna");

  function handleActiveTable(e) {
    setActiveTable(e.target.name);
  }

  return (
    <section className="PagesSectionTwo">
      <div className="wrapper">
        <div className="container">
          <div className="sectiontwo-container">
            <div className="tabs">
              {TabItemData.map((item, index) => (
                <TabItem
                  img={item.img}
                  name={item.name}
                  title={item.title}
                  subtitle={item.subtitle}
                  key={index}
                  style={item.activeColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSectionTwo;
