import React from "react";

function App() {
  let [user, setUser] = React.useState({
    name: "",
    age:"0"
  });
  

  function onChangeUser(event) {

   
    let {name, value} = event.target;

    setUser({...user, [name]   : event.target.value})

    console.log(event.target.name, event.target.value);
    // if(name === "name"){
    //   setUser({...user, name:value})
    // }

    // else if(name === "age"){
    //   setUser({...user, age:value})
    // }
    
  }

  // function onChangeAge(event) {
  //   age = event.target.value;
  //   setAge(age);
  // }

  return (
    <div className="container m-3">
      <h1>Input Object Understading in React </h1>

      <div>
        <h5>User Name: </h5>
        <input type="text" name="name" value={user.name} onChange={onChangeUser} />
        <button onClick={''}> sub</button>
        Welcome {user.name}
      </div>

      <div>
        <h5>User Age: </h5>
        <input type="number" name="age" value={user.age} onChange={onChangeUser} />
        {user.name} Age is {user.age} years
      </div>
    </div>
  );
}

export default App;
