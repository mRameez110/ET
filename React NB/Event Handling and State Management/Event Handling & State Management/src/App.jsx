import React from 'react'
import { useState } from 'react';

export default function App() {
    function OnClick(name) {
    console.log(name)
    alert("I m clicked by " +name);

    // Issue with updating standard variable value in UI (without use State)
  
  let count = 5;
  function increase(){
    count  =count +1;
    console.log(count)
  }
  
    // Solution: use the useState hook
  }

return (
    // <div>
    //   <h1>Welcome to React Event Handling</h1>
    //   <button onClick={() => OnClick("Rameez")}>Click Me</button>
    // </div>

    <div>
      <h1>This is Counter Demo</h1>
      <h4>count = {count}</h4>
      <button onClick={increase}>increase</button>
    </div>  
  );
}