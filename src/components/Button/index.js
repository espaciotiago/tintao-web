import "./styles.scss";

const Button = ({ label, onClick }) => {
  return (
    <button className="button-container" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
