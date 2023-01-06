import { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
  StyledScrollSection,
  StyledMainGrid,
} from "../components/GlobalStyles";
import MemoryOverviewCard from "../components/MemoryCard/MemoryOverviewCard";
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
      <MemoryOverviewCard
        sampleEvent={sampleEvent}
        onToggleFavorite={onToggleFavorite}
        onDelete={onDelete}
        onEditMemory={onEditMemory}
      />
    </Fragment>
  ));

  return (
    <>
      <StyledMainGrid>
        <Header />
        <StyledScrollSection>{memoriesList}</StyledScrollSection>
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
      </StyledMainGrid>
    </>
  );
}
