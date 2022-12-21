import { useState } from "react";
import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StyledMain, StyledCardSection } from "../components/GlobalStyles";
import EventCard from "../components/EventCard";
import CreateCard from "../components/CreateCard";

export default function Overview({
  sampleEvents,
  onToggleFavorite,
  onAddCreateCard,
}) {
  const [isCreating, setIsCreating] = useState(false);

  function handleIsCreating() {
    setIsCreating(!isCreating);
  }

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
        {isCreating ? (
          <CreateCard
            onAddCreateCard={onAddCreateCard}
            sampleEvents={sampleEvents}
            onHandleIsCreating={handleIsCreating}
          />
        ) : null}
        <Footer
          sampleEvents={sampleEvents}
          onHandleIsCreating={handleIsCreating}
        />
      </StyledMain>
    </>
  );
}
