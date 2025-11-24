import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import MyButton from "./components/Button";
import MyForm from "./components/Form";
import { CounterProvider } from "./provider/Counter";

function App() {
  return (
    <div className="App">
      <h1>This is button</h1>
      <MyForm text="click Me" onClick={() => alert("Button clicked")} />
      <CounterProvider>
        <MyButton text="click Me" onClick={() => alert("Button clicked")} />
      </CounterProvider>
    </div>
  );
}

export default App;
