import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MemoryCardDetail from "../components/MemoryCard/MemoryCardOverview";
import { StyledGridWrapper, StyledMain } from "../components/GlobalStyles";
import Link from "next/link";

export default function MemoryCardOverview({ sampleEvents, onToggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = sampleEvents?.find(
    (sampleEvent) => sampleEvent.id === id
  );
  if (!currentEvent) {
    return (
      <StyledGridWrapper>
        <Header />
        <StyledMain>
          <h1>ID does not match</h1>
          <Link aria-label="overview page" href={"/"}>
            Back to overview
          </Link>
        </StyledMain>
      </StyledGridWrapper>
    );
  }

  return (
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
  );
}
