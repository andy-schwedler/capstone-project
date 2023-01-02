import { useState, useEffect } from "react";

// right now this is not utilized but will be in next user story
export default function useFetch(url) {
  const [memoryData, setMemoryData] = useState([]);

  async function getMemories() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMemoryData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMemories();
  }, [url]);
  return memoryData;
}
