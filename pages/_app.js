import Head from "next/head";
import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  // stores data coming from MongoDB
  const [sampleEvents, setSampleEvents] = useState();

  // METHOD "POST"
  async function handleAddCreateCard(event) {
    event.preventDefault();

    // ./components/FORMS/CreateMemoryForm
    const date = event.target.date.value;
    const headline = event.target.elements.headline.value;
    const details = event.target.elements.details.value;
    const isfavorite = event.target.elements.favorite.checked;

    // ../../db/models/Memory
    const newEntry = {
      date: date,
      headline: headline,
      details: details,
      isFavorite: isfavorite,
    };

    // POST memories
    await fetch("/api/memories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });

    getMemories();

    event.target.reset();
  }
  // DELETE memories
  async function handleDeleteMemoryCard(id) {
    if (confirm("Are you sure you want to delete?")) {
      await fetch("/api/memories/" + id, {
        method: "DELETE",
      });
    }
    getMemories();
  }
  // UPDATE memories
  async function handleEditMemory(updatedMemory, id) {
    await fetch("/api/memories/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMemory),
    });
    getMemories();
  }
  // sorting ascending / oldest first
  function handleAscendingSort() {
    const ascendingData = sampleEvents?.slice().sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return date1 - date2;
    });
    setSampleEvents(ascendingData);
  }
  // sorting descending / newest first
  function handleDescendingSort() {
    const descendingData = sampleEvents?.slice().sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return date2 - date1;
    });
    setSampleEvents(descendingData);
  }

  // fetch data from database // replace with ./lib/fetch.js
  async function getMemories() {
    const response = await fetch("/api/memories");
    const memoriesList = await response.json();

    const sortedArray = memoriesList.slice().sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return date2 - date1;
    });

    setSampleEvents(sortedArray);
  }
  useEffect(() => {
    getMemories();
  }, []);

  // toggle favorite Button
  function handleToggleFavorite(id) {
    setSampleEvents(
      sampleEvents.map((sampleEvent) =>
        sampleEvent.id === id
          ? { ...sampleEvent, isFavorite: !sampleEvent.isFavorite }
          : sampleEvent
      )
    );
  }

  return (
    <>
      <Head>
        <title>🦫 Memories 💭</title>
      </Head>
      <GlobalStyles />
      <Component
        {...pageProps}
        sampleEvents={sampleEvents}
        onToggleFavorite={handleToggleFavorite}
        onAddCreateCard={handleAddCreateCard}
        onDelete={handleDeleteMemoryCard}
        onEditMemory={handleEditMemory}
        onAscendingSort={handleAscendingSort}
        onDescendingSort={handleDescendingSort}
      />
    </>
  );
}

export default MyApp;
