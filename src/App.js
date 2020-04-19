import React, { useState } from "react";
import * as axios from "axios";
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState(null);

  const fetchAnAdvice = async () => {
    try {
      const { data } = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1> {advice} </h1>
      <button onClick={fetchAnAdvice}> Get a new Advice </button>
    </div>
  );
}