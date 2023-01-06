import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MemoryCardDetail from "../components/MemoryCard/MemoryCardDetail";
import {
  StyledGridWrapper,
  StyledLink,
  StyledMain,
  StyledMainGrid,
  StyledScrollSection,
} from "../components/GlobalStyles";
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
        <DisplayMessage message={"ID does not match"} />
        <StyledLink href={"/"}>Back to overview</StyledLink>
      </>
    );
  }

  return (
    <>
      <StyledGridWrapper>
        <Header />
        <StyledMain>
          <MemoryCardDetail
            currentEvent={currentEvent}
            onToggleFavorite={onToggleFavorite}
          />
        </StyledMain>
        <Footer sampleEvents={sampleEvents} />
      </StyledGridWrapper>
    </>
  );
}
