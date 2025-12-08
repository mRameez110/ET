import React from 'react'
import { useState } from 'react';

export default function App() {
    function OnClick(name) {
    console.log(name)
    alert("I m clicked by " +name);
  }

return (
    <div>
      <h1>Welcome to React Event Handling</h1>
      <button onClick={() => OnClick("Rameez")}>Click Me</button>

    </div>
  );
}