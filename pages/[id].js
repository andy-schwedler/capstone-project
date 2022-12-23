import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import EventCardDetails from "../components/MemoryCard/EventCardDetails";
import {
  StyledCardSection,
  StyledLocationLink,
  StyledMain,
} from "../components/GlobalStyles";
import ErrorMessage from "../components/ErrorMessage";

export default function EventCardOverview({ sampleEvents, onToggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = sampleEvents.find(
    (sampleEvent) => sampleEvent.id === id
  );
  if (!currentEvent) {
    return (
      <>
        <ErrorMessage message={"ID does not match"} />
        <StyledLocationLink href={"/"}>Back to overview</StyledLocationLink>
      </>
    );
  }

  return (
    <>
      <StyledMain>
        <Header />
        <StyledCardSection>
          <EventCardDetails
            currentEvent={currentEvent}
            onToggleFavorite={onToggleFavorite}
          />
        </StyledCardSection>
        <Footer />
      </StyledMain>
    </>
  );
}
