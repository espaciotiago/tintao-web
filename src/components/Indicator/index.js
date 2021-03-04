const Indicator = ({ color }) => {
  return (
    <div
      style={{
        background: color,
        height: 12,
        width: 12,
        borderRadius: "50%",
        marginRight: 16,
        marginLeft: 16,
        cursor: "pointer",
      }}
    />
  );
};

export default Indicator;
