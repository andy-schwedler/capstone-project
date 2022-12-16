import { StyledCardSection } from "../components/StyledCardSection";
import Footer from "../components/Footer";
import { StyledMain } from "../components/GlobalStyles";
import { useState } from "react";
import { Fragment } from "react";
import Header from "../components/Header";
import { initialEvents } from "../data/events";
import EventCard from "../components/EventCard";

export default function Home() {
  const [events, setEvents] = useState(initialEvents);

  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>
          {events.map((event) => (
            <Fragment key={event.id}>
              <EventCard event={event} />
            </Fragment>
          ))}
        </StyledCardSection>
      </StyledMain>
      <Footer />
    </>
  );
}
