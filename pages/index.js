import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StyledMain } from "../components/GlobalStyles";
import EventCard, { StyledCardSection } from "../components/EventCard";

export default function Overview({ sampleEvents, onToggleFavorite }) {
  return (
    <>
      <Header />
      <StyledMain>
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
      </StyledMain>
      <Footer sampleEvents={sampleEvents} />
    </>
  );
}
