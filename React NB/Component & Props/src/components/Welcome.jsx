const Welcome = ({ name = "Unkown(Name is missing)", age }) => {
  const ageStyle = { color: age > 20 ? "blue" : "green" };
  const unknownStyle = {
    color: name === "Unkown(Name is missing)" ? "red" : "",
  };
