import { useState, useEffect } from "react";
import * as axios from "axios";

export function useAdvice() {
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    fetchAnAdvice();
  }, []);

  return [advice, isLoading, fetchAnAdvice];
}