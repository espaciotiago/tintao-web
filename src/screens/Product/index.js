import { NavBarHeader, Footer } from "../../components";
import { productsList as products } from "../../utilities/mockData";
import "./styles.scss";

const Product = () => {
  return (
    <>
      <NavBarHeader>
        <h1>Elige el café de tú preferencia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam
          semper nisl aliquet quisque curae vestibulum. Lorem ipsum dolor sit.
        </p>
      </NavBarHeader>
      <div className="product-container">
        <h1>Producto</h1>
      </div>
      <Footer />
    </>
  );
};

export default Product;
