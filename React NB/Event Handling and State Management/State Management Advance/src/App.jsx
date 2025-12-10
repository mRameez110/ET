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


}