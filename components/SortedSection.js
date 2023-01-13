import { Fragment } from "react";
import styled from "styled-components";
import MemoryPreview from "./MemoryCard/MemoryPreview";

export default function SortedSection({
  sampleEvents,
  onToggleFavorite,
  onDelete,
  onEditMemory,
}) {
  const sortNewestFirst = sampleEvents
    ?.slice()
    ?.sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return date1 - date2;
    })
    .reverse()
    .map((sampleEvent) => (
      <Fragment key={sampleEvent.id}>
        <MemoryPreview
          sampleEvent={sampleEvent}
          onToggleFavorite={onToggleFavorite}
        />
        {/* <MemoryListCard
          sampleEvent={sampleEvent}
          onToggleFavorite={onToggleFavorite}
          onDelete={onDelete}
          onEditMemory={onEditMemory}
        /> */}
      </Fragment>
    ));

  return (
    <>
      <h3>All of your memories</h3>
      <StyledSortedSection>{sortNewestFirst}</StyledSortedSection>
    </>
  );
}

const StyledSortedSection = styled.section`
  display: flex;
  width: 100%;
  gap: 3.5em;
  height: 10rem;
  overflow-y: scroll;
`;
