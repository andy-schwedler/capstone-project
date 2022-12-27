import { Fragment } from "react";
import CreateCard from "../../components/CreateCard/CreateCard";
import DisplayMessage from "../../components/DisplayMessage";
import Footer from "../../components/Footer/Footer";
import { StyledMain, StyledCardSection } from "../../components/GlobalStyles";
import Header from "../../components/Header/Header";
import EventCard from "../../components/MemoryCard/EventCard";

export default function Bookmarks({
  sampleEvents,
  onToggleFavorite,
  onHandleIsCreating,
  isCreating,
  onAddCreateCard,
}) {
  // filter for Bookmarks-Page
  const favEvents = sampleEvents.filter(
    (sampleEvent) => sampleEvent.isFavorite === true
  );
  // render filtered bookmarks
  const favEventList = favEvents.map((favEvent) => (
    <Fragment key={favEvent.id}>
      <EventCard sampleEvent={favEvent} onToggleFavorite={onToggleFavorite} />
    </Fragment>
  ));

  return (
    <>
      <StyledMain>
        <Header />
        <StyledCardSection>
          {favEvents.length === 0 ? (
            <DisplayMessage message={"🥕 🦫 🥦"} />
          ) : (
            favEventList
          )}
        </StyledCardSection>
        {isCreating ? (
          <CreateCard
            onAddCreateCard={onAddCreateCard}
            onHandleIsCreating={onHandleIsCreating}
          />
        ) : null}
        <Footer
          sampleEvents={sampleEvents}
          onHandleIsCreating={onHandleIsCreating}
        />
      </StyledMain>
    </>
  );
}
