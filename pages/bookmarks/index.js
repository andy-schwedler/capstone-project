import Header from "../../components/Header/Header";
import DisplayMessage from "../../components/DisplayMessage";
import Footer from "../../components/Footer/Footer";
import { StyledGridWrapper, StyledMain } from "../../components/GlobalStyles";
import MemoryListCard from "../../components/MemoryCard/MemoryListCard";

export default function Bookmarks({
  sampleEvents,
  onToggleFavorite,
  onDelete,
  onEditMemory,
}) {
  // filter for Bookmarks-Page
  const favMemories = sampleEvents?.filter(
    (sampleEvent) => sampleEvent.isFavorite === true
  );
  // render filtered bookmarks
  const favMemoriesList = favMemories?.map((favEvent) => (
    <MemoryListCard
      key={favEvent.id}
      onDelete={onDelete}
      sampleEvent={favEvent}
      onToggleFavorite={onToggleFavorite}
      onEditMemory={onEditMemory}
    />
  ));

  const favList =
    favMemories?.length === 0 ? (
      <DisplayMessage message={"🥕 🦫 🥦"} />
    ) : (
      favMemoriesList
    );

  return (
    <StyledGridWrapper>
      <Header />
      <StyledMain>{favList}</StyledMain>
      <Footer sampleEvents={sampleEvents} />
    </StyledGridWrapper>
  );
}
