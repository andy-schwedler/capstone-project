import { Fragment } from "react";
import Header from "../../components/Header/Header";
import DisplayMessage from "../../components/DisplayMessage";
import CreateCard from "../../components/CreateCard/CreateCard";
import Footer from "../../components/Footer/Footer";
import {
  StyledMainGrid,
  StyledScrollSection,
} from "../../components/GlobalStyles";
import MemoryOverviewCard from "../../components/MemoryCard/MemoryOverviewCard";

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
      <MemoryOverviewCard
        sampleEvent={favEvent}
        onToggleFavorite={onToggleFavorite}
      />
    </Fragment>
  ));

  return (
    <>
      <StyledMainGrid>
        <Header />
        <StyledScrollSection>
          {favEvents?.length === 0 ? (
            <DisplayMessage message={"🥕 🦫 🥦"} />
          ) : (
            favEventList
          )}
        </StyledScrollSection>
        {isCreating ? (
          <CreateCard
            onAddCreateCard={onAddCreateCard}
            onHandleIsCreating={onHandleIsCreating}
          />
        ) : null}
        <Footer
          sampleEvents={sampleEvents}
          onHandleIsCreating={onHandleIsCreating}
        />
      </StyledMainGrid>
    </>
  );
}
