import { logo, wp, ig, fb } from "../../assets";
import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <label>Para mayor información ponte en contacto con nosotros.</label>
        <div className="social-networks">
          <a>
            <img src={wp} alt="whatsapp" />
          </a>
          <a>
            <img src={fb} alt="facebook" />
          </a>
          <a>
            <img src={ig} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="brand-container">
        <div className="description-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam
            semper nisl aliquet quisque curae vestibulum.
          </p>
        </div>
        <img src={logo} alt="logo de tintao café" />
      </div>
    </footer>
  );
};

export default Footer;
