const Welcome = ({ name = "Unkown(Name is missing)", age }) => {
  const ageStyle = { color: age > 20 ? "blue" : "green" };
  const unknownStyle = {
    color: name === "Unkown(Name is missing)" ? "red" : "",
  };

  return (
    <h1 style={ageStyle}>
      Welcome Dear <span style={unknownStyle}>{name}</span>. Your are {age}{" "}
      years old.
    </h1>
  );
};

export default Welcome;
