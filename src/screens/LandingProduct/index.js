import { abaLanding, logo } from "../../assets";
import { Button } from "../../components";
import "./styles.scss";

const LandingProduct = () => {
  return (
    <div className="backgrounded" style={{ background: "#cce2e2" }}>
      <div className="product-landing-container">
        <div className="logo-container">
          <img alt="logo-tintao" src={logo} />
        </div>
        <div className="left-container">
          <div style={{ margin: 32 }}>
            <h1 style={{ color: "#0a777a" }}>ABA</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam
              semper nisl aliquet quisque curae vestibulum.
            </p>
            <div className="actions">
              <Button label="VISITAR TIENDA" />
            </div>
          </div>
        </div>
        <div className="rigth-container">
          <img src={abaLanding} alt="product" />
        </div>
      </div>
    </div>
  );
};

export default LandingProduct;
