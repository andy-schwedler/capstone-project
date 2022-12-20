import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCardDetails from "../components/EventCardDetails";
import {
  StyledCardSection,
  StyledLink,
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
        <ErrorMessage
          message={
            "Nano ID changes with every load, that´s why the ID does not match"
          }
        />
        <StyledLink href={"/"}>click to go back to overview</StyledLink>
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
