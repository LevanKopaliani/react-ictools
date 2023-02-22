import DemoRequest from "../components/DemoRequest";
import Footer from "../components/Footer";
import MainButton from "../components/MainButton";
import "../styles/Product.scss";
import ProductSectionThree from "./Sections/ProductSectionThree";
import ProductSectionTwo from "./Sections/ProductSectionTwo";

const Product = () => {
  return (
    <main className="product">
      <section className="product-section">
        <div className="wrapper">
          <div className="container">
            <div className="product-container">
              <div className="product-text">
                <h1 className="title">
                  Unlock
                  <br /> Unprecedented
                  <br /> Levels of Creativity <br />
                  and Production
                </h1>
                <p className="subtitle">
                  Transform and streamline every stage of the production process
                  with our ecosystem of plugins and pipelines.
                </p>
              </div>

              <MainButton
                text={"Request a demo today"}
                type={"mainbutton"}
                modal={true}
              />
            </div>
          </div>
        </div>
      </section>
      <ProductSectionTwo />
      <ProductSectionThree />
      <DemoRequest />
      <Footer />
    </main>
  );
};

export default Product;
