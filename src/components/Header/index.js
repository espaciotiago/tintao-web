import { logo, icCar } from "../../assets";
import "./styles.scss";

const NavBarHeader = ({ badge = 100, children }) => {
  return (
    <div>
      <nav>
        <div className="brand-container">
          <img src={logo} alt="logo de tintao café" />
          <div className="description-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam
              semper nisl aliquet quisque curae vestibulum.
            </p>
          </div>
        </div>
        <div className="cart-container">
          <img src={icCar} alt="carrito de compras" />
          {badge && (
            <div className="badge-container">
              <label>{badge > 9 ? "+9" : badge}</label>
            </div>
          )}
        </div>
      </nav>
      <div className="inside-header">{children}</div>
    </div>
  );
};

export default NavBarHeader;
