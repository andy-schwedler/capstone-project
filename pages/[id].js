import { useRouter } from "next/router";
import { initialEvents } from "../data/sampleEvents";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCardDetails from "../components/EventCardDetails";
import { StyledCardSection, StyledMain } from "../components/GlobalStyles";

export default function EventCardOverview({ onToggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = initialEvents.find(
    (initialEvent) => initialEvent.id === id
  );
  if (!currentEvent) {
    return null;
  }

  return (
    <>
      <StyledMain>
        <Header />
        <StyledCardSection>
          <EventCardDetails currentEvent={currentEvent} />
        </StyledCardSection>
        <Footer />
      </StyledMain>
    </>
  );
}
