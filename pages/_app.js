import { useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import { initialEvents } from "../data/events";

function MyApp({ Component, pageProps }) {
  const [events, setEvents] = useState(initialEvents);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} events={events} />
    </>
  );
}

export default MyApp;
