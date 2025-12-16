import React from "react";

function App() {
    let [user, setUser] = React.useState({
    name: "",
    age: "0"
  });

    function onChangeUser(event) {
    let { name, value } = event.target;

    setUser({ ...user, [name]: value });

    console.log(event.target.name, event.target.value);
  }


  return <div></div>;
}

export default App;
