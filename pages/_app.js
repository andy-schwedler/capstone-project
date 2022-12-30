import Head from "next/head";
import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  // store data
  const [sampleEvents, setSampleEvents] = useState();

  // show create page
  const [isCreating, setIsCreating] = useState(false);

  // fetch data from database
  async function getMemories() {
    const response = await fetch("/api/memories");
    const memoriesList = await response.json();
    setSampleEvents(memoriesList);
  }
  useEffect(() => {
    getMemories();
  }, []);

  // toggle show create page
  function handleIsCreating() {
    setIsCreating(!isCreating);
  }

  // favorite Button
  function handleToggleFavorite(id) {
    setSampleEvents(
      sampleEvents.map((sampleEvent) =>
        sampleEvent.id === id
          ? { ...sampleEvent, isFavorite: !sampleEvent.isFavorite }
          : sampleEvent
      )
    );
  }

  async function handleAddCreateCard(event) {
    event.preventDefault();

    const date = event.target.date.value;
    const memory = event.target.memory.value;
    const isFavoriteCheckbox = event.target.isFavorite.checked;

    // ./db/models/Memory.js
    const newEntry = {
      name: memory,
      date: date,
      isFavorite: isFavoriteCheckbox,
    };

    // send newEntry to database
    await fetch("/api/memories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });

    getMemories();

    event.target.reset();
    handleIsCreating();
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
      />
    </>
  );
}

export default MyApp;
