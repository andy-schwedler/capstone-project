import { nanoid } from "nanoid";
import Head from "next/head";
import { useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import { initialEvents } from "../db/sampleEvents";

function MyApp({ Component, pageProps }) {
  // dummy data state
  const [sampleEvents, setSampleEvents] = useState(initialEvents);

  // show create page
  const [isCreating, setIsCreating] = useState(false);

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
  // id: nanoid(),
  // name: "Beaverletics",
  // date: "24.12.2023",
  // category: "sport",
  // isFavorite: false,
  // location: "München",
  // add a memory card
  function handleAddCreateCard(event) {
    event.preventDefault();
    const date = event.target.date.value;
    const memory = event.target.memory.value;
    const isFavoriteCheckbox = event.target.isFavorite.checked;

    const newEntry = {
      id: nanoid(),
      name: memory,
      date: date,
      isFavorite: isFavoriteCheckbox,
      location: "",
    };

    setSampleEvents([...sampleEvents, newEntry]);

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
