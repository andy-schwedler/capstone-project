import { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { StyledMain, StyledGridWrapper } from "../components/GlobalStyles";
import MemoryListCard from "../components/MemoryCard/MemoryListCard";
import CreateCard from "../components/CreateCard/CreateCard";

export default function Overview({
  sampleEvents,
  onToggleFavorite,
  onAddCreateCard,
  isCreating,
  onHandleIsCreating,
  onDelete,
  onEditMemory,
}) {
  const memoriesList = sampleEvents?.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <MemoryListCard
        sampleEvent={sampleEvent}
        onToggleFavorite={onToggleFavorite}
        onDelete={onDelete}
        onEditMemory={onEditMemory}
      />
    </Fragment>
  ));

  return (
    <>
      <StyledGridWrapper>
        <Header />
        <StyledMain>{memoriesList}</StyledMain>
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
