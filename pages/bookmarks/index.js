import { Fragment } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import EventCard from "../../components/EventCard";
import Footer from "../../components/Footer";
import { StyledMain, StyledCardSection } from "../../components/GlobalStyles";
import Header from "../../components/Header";

export default function Bookmarks({ sampleEvents, onToggleFavorite }) {
  const favEvents = sampleEvents.filter(
    (sampleEvent) => sampleEvent.isFavorite === true
  );

  return (
    <>
      <StyledMain>
        <Header />
        <StyledCardSection>
          {favEvents.length === 0 ? (
            <ErrorMessage message={"🥕 🦫 🥦"} />
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
        <Footer />
      </StyledMain>
    </>
  );
}
