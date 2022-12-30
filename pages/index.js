import { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { StyledMain, StyledCardSection } from "../components/GlobalStyles";
import EventCard from "../components/MemoryCard/EventCard";
import CreateCard from "../components/CreateCard/CreateCard";

export default function Overview({
  sampleEvents,
  onToggleFavorite,
  onAddCreateCard,
  isCreating,
  onHandleIsCreating,
}) {
  return (
    <>
      <StyledMain>
        <Header />
        <StyledCardSection>
          {sampleEvents?.map((sampleEvent) => (
            <Fragment key={sampleEvent.id}>
              <EventCard
                sampleEvent={sampleEvent}
                onToggleFavorite={onToggleFavorite}
              />
            </Fragment>
          ))}
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
          isCreating={isCreating}
        />
      </StyledMain>
    </>
  );
}
