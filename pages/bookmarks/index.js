import { Fragment } from "react";
import Header from "../../components/Header/Header";
import DisplayMessage from "../../components/DisplayMessage";
import CreateCard from "../../components/CreateCard/CreateCard";
import Footer from "../../components/Footer/Footer";
import { StyledGridWrapper, StyledMain } from "../../components/GlobalStyles";
import MemoryListCard from "../../components/MemoryCard/MemoryListCard";

export default function Bookmarks({
  sampleEvents,
  onToggleFavorite,
  onHandleIsCreating,
  isCreating,
  onAddCreateCard,
}) {
  // filter for Bookmarks-Page
  const favEvents = sampleEvents?.filter(
    (sampleEvent) => sampleEvent.isFavorite === true
  );
  // render filtered bookmarks
  const favEventList = favEvents?.map((favEvent) => (
    <Fragment key={favEvent.id}>
      <MemoryListCard
        sampleEvent={favEvent}
        onToggleFavorite={onToggleFavorite}
      />
    </Fragment>
  ));

  const BookmarkListWithFallback =
    favEvents?.length === 0 ? (
      <DisplayMessage message={"🥕 🦫 🥦"} />
    ) : (
      favEventList
    );

  return (
    <>
      <StyledGridWrapper>
        <Header />
        <StyledMain>{BookmarkListWithFallback}</StyledMain>
        {isCreating && (
          <CreateCard
            onAddCreateCard={onAddCreateCard}
            onHandleIsCreating={onHandleIsCreating}
          />
        )}
        <Footer
          sampleEvents={sampleEvents}
          onHandleIsCreating={onHandleIsCreating}
        />
      </StyledGridWrapper>
    </>
  );
}
