import React, { useState, useEffect } from "react";
import * as axios from "axios";
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAnAdvice();
  }, []);

  const fetchAnAdvice = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(data.slip.advice);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1> {isLoading ? '...': advice} </h1>
      <button onClick={fetchAnAdvice}> Get a new Advice </button>
    </div>
  );
}