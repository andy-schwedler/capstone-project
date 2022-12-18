import { Fragment } from "react";
import { StyledCardSection } from "../../components/EventCard";
import ErrorMessage from "../../components/ErrorMessage";
import EventCard from "../../components/EventCard";
import Footer from "../../components/Footer";
import { StyledMain } from "../../components/GlobalStyles";
import Header from "../../components/Header";

export default function Bookmarks({ sampleEvents, onToggleFavorite }) {
  const favEvents = sampleEvents.filter(
    (sampleEvent) => sampleEvent.isFavorite === true
  );

  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>
          {favEvents.length === 0 ? (
            <ErrorMessage message={"pick a favorite beaver event"} />
          ) : (
            favEvents.map((favEvent) => (
              <Fragment key={favEvent.id}>
                <EventCard
                  sampleEvent={favEvent}
                  onToggleFavorite={onToggleFavorite}
                />
              </Fragment>
            ))
          )}
        </StyledCardSection>
      </StyledMain>
      <Footer />
    </>
  );
}
