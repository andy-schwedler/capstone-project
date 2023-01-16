import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MemoryCardDetail from "../components/MemoryCard/MemoryCardDetail";
import { StyledLink, StyledMain } from "../components/GlobalStyles";
import DisplayMessage from "../components/DisplayMessage";

export default function EventCardOverview({ sampleEvents, onToggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = sampleEvents?.find(
    (sampleEvent) => sampleEvent.id === id
  );
  if (!currentEvent) {
    return (
      <>
        <Header />
        <DisplayMessage message={"ID does not match"} />
        <StyledLink aria-label="overview page" href={"/"}>
          Back to overview
        </StyledLink>
      </>
    );
  }

  return (
    <>
      <Header />
      <StyledMain>
        <MemoryCardDetail
          currentEvent={currentEvent}
          onToggleFavorite={onToggleFavorite}
        />
      </StyledMain>
      <Footer sampleEvents={sampleEvents} />
    </>
  );
}
