import React from "react";
import "./styles.css";
import { useAdvice } from './use-advice';

export default function App() {
  const [advice, isLoading, fetchAnAdvice ] = useAdvice();

  return (
    <div className="App">
      <h1> {isLoading ? '...': advice} </h1>
      <button onClick={fetchAnAdvice}> Get a new Advice </button>
    </div>
  );
}