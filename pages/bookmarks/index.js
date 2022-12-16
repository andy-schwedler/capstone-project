import { Fragment } from "react";
import { StyledCardSection } from "..";
import EventCard from "../../components/EventCard";
import Footer from "../../components/Footer";
import { StyledMain } from "../../components/GlobalStyles";
import Header from "../../components/Header";

export default function Bookmarks({ events, onToggleFavorite }) {
  const favEvents = events.filter((event) => event.isFavorite === true);

  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>
          {favEvents.map((favEvent) => (
            <Fragment key={favEvent.id}>
              <EventCard event={favEvent} onToggleFavorite={onToggleFavorite} />
            </Fragment>
          ))}
        </StyledCardSection>
      </StyledMain>
      <Footer />
    </>
  );
}
