import { Fragment } from "react";
import Header from "../../components/Header/Header";
import DisplayMessage from "../../components/DisplayMessage";
import Footer from "../../components/Footer/Footer";
import { StyledGridWrapper, StyledMain } from "../../components/GlobalStyles";
import MemoryListCard from "../../components/MemoryCard/MemoryListCard";

export default function Bookmarks({
  sampleEvents,
  onToggleFavorite,
  onDelete,
}) {
  // filter for Bookmarks-Page
  const favMemories = sampleEvents?.filter(
    (sampleEvent) => sampleEvent.isFavorite === true
  );
  // render filtered bookmarks
  const favEventList = favMemories?.map((favEvent) => (
    <Fragment key={favEvent.id}>
      <MemoryListCard
        onDelete={onDelete}
        sampleEvent={favEvent}
        onToggleFavorite={onToggleFavorite}
      />
    </Fragment>
  ));

  const favList =
    favMemories?.length === 0 ? (
      <DisplayMessage message={"🥕 🦫 🥦"} />
    ) : (
      favEventList
    );

  return (
    <>
      <StyledGridWrapper>
        <Header />
        <StyledMain>{favList}</StyledMain>
        <Footer sampleEvents={sampleEvents} />
      </StyledGridWrapper>
    </>
  );
}
