import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MemoryCardDetail from "../components/MemoryCard/MemoryCardDetail";
import {
  StyledLocationLink,
  StyledMainGrid,
  StyledScrollSection,
} from "../components/GlobalStyles";
import DisplayMessage from "../components/DisplayMessage";
import CreateCard from "../components/CreateCard/CreateCard";

export default function EventCardOverview({
  sampleEvents,
  onToggleFavorite,
  isCreating,
  onHandleIsCreating,
  onAddCreateCard,
}) {
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = sampleEvents?.find(
    (sampleEvent) => sampleEvent.id === id
  );
  if (!currentEvent) {
    return (
      <>
        <DisplayMessage message={"ID does not match"} />
        <StyledLocationLink href={"/"}>Back to overview</StyledLocationLink>
      </>
    );
  }

  return (
    <>
      <StyledMainGrid>
        <Header />
        <StyledScrollSection>
          <MemoryCardDetail
            currentEvent={currentEvent}
            onToggleFavorite={onToggleFavorite}
          />
        </StyledScrollSection>
        {isCreating ? (
          <CreateCard
            onAddCreateCard={onAddCreateCard}
            onHandleIsCreating={onHandleIsCreating}
          />
        ) : null}
        <Footer onHandleIsCreating={onHandleIsCreating} />
      </StyledMainGrid>
    </>
  );
}
