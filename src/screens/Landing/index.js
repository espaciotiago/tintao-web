import { logoWhite, landingBackground } from "../../assets";
import { Button, Indicator } from "../../components";
import "./styles.scss";

const Landing = () => {
  return (
    <div className="backgrounded-image">
      <img
        src={landingBackground}
        alt="background"
        className="background-image"
      />

      <div className="landing-container">
        <div className="left-container">
          <h1>CAFES ESPECIALES DE ORIGEN</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam
            semper nisl aliquet quisque curae vestibulum.
          </p>
          <Button label="EMPECEMOS" />
        </div>
        <div className="rigth-container">
          <img src={logoWhite} alt="logo-tintao" />
        </div>
      </div>

      <div className="indicators">
        <Indicator color="#f2c971" />
        <Indicator color="#0a777a" />
        <Indicator color="#d76560" />
      </div>
    </div>
  );
};

export default Landing;
