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
  return (
    <>
      <StyledMainGrid>
        <Header />
        <StyledScrollSection>
          {sampleEvents?.map((sampleEvent) => (
            <Fragment key={sampleEvent.id}>
              <MemoryOverviewCard
                sampleEvent={sampleEvent}
                onToggleFavorite={onToggleFavorite}
                onDelete={onDelete}
                onEditMemory={onEditMemory}
              />
            </Fragment>
          ))}
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
