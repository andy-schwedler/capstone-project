import { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
  StyledScrollSection,
  StyledMainGrid,
} from "../components/GlobalStyles";
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
      <StyledMainGrid>
        <Header />
        <StyledScrollSection>
          {sampleEvents?.map((sampleEvent) => (
            <Fragment key={sampleEvent.id}>
              <EventCard
                sampleEvent={sampleEvent}
                onToggleFavorite={onToggleFavorite}
              />
            </Fragment>
          ))}
        </StyledScrollSection>
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
      </StyledMainGrid>
    </>
  );
}
