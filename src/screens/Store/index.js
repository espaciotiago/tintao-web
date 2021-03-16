import { NavBarHeader, Footer } from "../../components";
import { productsList as products } from "../../utilities/mockData";
import "./styles.scss";

const Store = () => {
  return (
    <>
      <NavBarHeader>
        <h1>Elige el café de tú preferencia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam
          semper nisl aliquet quisque curae vestibulum. Lorem ipsum dolor sit.
        </p>
      </NavBarHeader>
      <div className="store-container">
        {products.map((product, index) => {
          return (
            <div className="product-container">
              <div
                className="product-card"
                style={{ background: product.color }}
                key={product.id ? `${product.id}` : `${index}`}
              >
                <h3 className="name">{product.name}</h3>
                <p>{product.summary}</p>
                <img src={product.image} alt="imagen del producto" />
                <h3 className="price">
                  $ {product.price.toLocaleString("es")}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Store;
