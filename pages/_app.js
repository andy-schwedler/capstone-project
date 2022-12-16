import { useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import { initialEvents } from "../data/events";

function MyApp({ Component, pageProps }) {
  const [events, setEvents] = useState(initialEvents);
  console.log(events);

  function handleToggleFavorite(id) {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, isFavorite: !event.isFavorite } : event
      )
    );
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        events={events}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}

export default MyApp;
