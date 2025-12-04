const Welcome = ({ name = "Unkown(Name is missing)", age }) => {
  const ageStyle = { color: age > 20 ? "blue" : "green" };
