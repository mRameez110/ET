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

      // if(name === "name"){
    //   setUser({...user, name:value})
    // }
    // else if(name === "age"){
    //   setUser({...user, age:value})
    // }



  return <div>
          <div>
        <h5>User Name: </h5>
        <input type="text" name="name" value={user.name} onChange={onChangeUser} />
        <button onClick={''}> sub</button>
        Welcome {user.name}
      </div>

  </div>;
}

export default App;
