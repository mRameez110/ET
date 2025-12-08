// Event Handling in JSX

import React from 'react'
import { useState } from 'react';



export default function App() {

  // function OnClick(name) {
  //   console.log(name)

  //   alert("I m clicked by " +name);
  // }

  // Issue with updating standard variable value in UI (without use State)
  
  // let count = 5;

  // function increase(){
  //   count  =count +1;
  //   console.log(count)
  // }

  // Solution: use the useState hook


  let [increment, setIncrement] = useState(0);


  function increastWithUseStateHook(){

    // increment = increment + 1;
    setIncrement(++increment);
  }





  return (
    
    // <>
    // <div>Event handling in React</div>
    // <button onClick={()=>OnClick('Rameez')}> Clicke ME</button>
    // </>
    

    // Issue with updating standard variable value in UI (without use State)

    // <>
    // <div>
    //   <h1>This is Counter Demo</h1>
    //   <h4>count = {count}</h4>
    //   <button onClick={increase}>increase</button>
    // </div>    
    // </> 
    
    
    
      <>
    <div>
      <h1>This is Counter Demo</h1>
      <h4>count = {increment}</h4>
      <button onClick={increastWithUseStateHook}>increase</button>
    </div>    
    </>

  )
}


