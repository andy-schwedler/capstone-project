import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StyledMain, StyledCardSection } from "../components/GlobalStyles";
import EventCard from "../components/EventCard";

export default function Overview({ sampleEvents, onToggleFavorite }) {
  const allEvents = sampleEvents.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <EventCard
        sampleEvent={sampleEvent}
        onToggleFavorite={onToggleFavorite}
      />
    </Fragment>
  ));

  return (
    <>
      <StyledMain>
        <Header />
        <StyledCardSection>{allEvents}</StyledCardSection>
        <Footer sampleEvents={sampleEvents} />
      </StyledMain>
    </>
  );
}
