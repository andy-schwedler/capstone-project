import { nanoid } from "nanoid";
import Head from "next/head";
import { useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import { initialEvents } from "../data/sampleEvents";

const Schmarrrn = {
  id: nanoid(),
  name: "Beaverletics",
  date: "24.12.2023",
  isFavorite: false,
  text: "thoughts",
};

function MyApp({ Component, pageProps }) {
  const [sampleEvents, setSampleEvents] = useState(initialEvents);

  function handleToggleFavorite(id) {
    setSampleEvents(
      sampleEvents.map((sampleEvent) =>
        sampleEvent.id === id
          ? { ...sampleEvent, isFavorite: !sampleEvent.isFavorite }
          : sampleEvent
      )
    );
  }
  function handleAddCreateCard(event) {
    event.preventDefault();
    const date = event.target.date.value;
    const memory = event.target.memory.value;
    console.log("text:", date, "memory:", memory);
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
      />
    </>
  );
}

export default MyApp;
