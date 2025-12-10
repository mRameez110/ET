import React from "react";
import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);
    let [marks, setMarks] = useState([1, 2, 3, 4]);

      function increaseCount(index) {
    marks[index] = marks[index] +1;
    setMarks(marks);
    console.log("marks array ", marks);
    console.log(count);
  }

    function decreaseCount(index) {
    setCount(--count);
    console.log(count);
  }

    return (
    <div className="container-fluid my-5">
      <h1>Advanc State Management</h1>
            {marks.map((m,i) => (
        <div>
          <button className="" onClick={()=>increaseCount(i)}>
            {" "}
            ++{" "}
          </button>

          <span className="mx-2">{m}</span>

          <button className="px-2" onClick={()=>decreaseCount(i)}>
            {" "}
            --{" "}
          </button>

    </div>
)


}