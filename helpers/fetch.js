import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [fetchData, setFetchData] = useState([]);

  async function getMemories() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMemories();
  }, [url]);
  return fetchData;
}
