import Head from "next/head";
import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  // store data
  const [sampleEvents, setSampleEvents] = useState();

  // show create page
  const [isCreating, setIsCreating] = useState(false);

  // toggle show create page
  function handleIsCreating() {
    setIsCreating(!isCreating);
  }

  // fetch data from database // replace with ./lib/fetch.js
  async function getMemories() {
    const response = await fetch("/api/memories");
    const memoriesList = await response.json();
    setSampleEvents(memoriesList);
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
    console.log(newEntry);

    // send newEntry to database
    await fetch("/api/memories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });

    getMemories();

    // event.target.reset();
    handleIsCreating();
  }

  async function handleDeleteMemoryCard(id) {
    if (confirm("Are you sure you want to delete?")) {
      await fetch("/api/memories/" + id, {
        method: "DELETE",
      });
    }
    getMemories();
  }

  async function handleEditMemory(updatedMemory, id) {
    await fetch("/api/memories/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMemory),
    });
    getMemories();
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
        isCreating={isCreating}
        onHandleIsCreating={handleIsCreating}
        onDelete={handleDeleteMemoryCard}
        onEditMemory={handleEditMemory}
      />
    </>
  );
}

export default MyApp;
