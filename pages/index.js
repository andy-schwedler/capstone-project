import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StyledMain, StyledCardSection } from "../components/GlobalStyles";
import EventCard from "../components/EventCard";

export default function Overview({ sampleEvents, onToggleFavorite }) {
  return (
    <>
      <StyledMain>
        <Header />
        <StyledCardSection>
          {sampleEvents.map((sampleEvent) => (
            <Fragment key={sampleEvent.id}>
              <EventCard
                sampleEvent={sampleEvent}
                onToggleFavorite={onToggleFavorite}
              />
            </Fragment>
          ))}
        </StyledCardSection>
        <Footer sampleEvents={sampleEvents} />
      </StyledMain>
    </>
  );
}
