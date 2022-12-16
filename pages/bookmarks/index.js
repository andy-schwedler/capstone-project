import { StyledCardSection } from "..";
import EventCard from "../../components/EventCard";
import Footer from "../../components/Footer";
import { StyledMain } from "../../components/GlobalStyles";
import Header from "../../components/Header";

export default function Bookmarks({ events }) {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>
          {events.map(
            (event) =>
              event.isFavorite && <EventCard key={event.id} event={event} />
          )}
        </StyledCardSection>
      </StyledMain>
      <Footer />
    </>
  );
}
