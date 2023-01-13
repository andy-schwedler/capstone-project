import { Fragment, useState } from "react";
import styled from "styled-components";
import MemoryPreview from "./MemoryCard/MemoryPreview";

export default function SortedSection({
  sampleEvents,
  onToggleFavorite,
  onDelete,
  onEditMemory,
  headline,
}) {
  const [iscollapsed, setIsCollapsed] = useState(true);

  function handleCollapse() {
    setIsCollapsed(!iscollapsed);
  }
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
      </Fragment>
    ));

  const years = sampleEvents
    ?.filter((sampleEvent) => {
      return sampleEvent.date >= "2022-01-10";
    })
    .map((year) => {
      const date = new Date(year.date);
      const yearOnly = date.getFullYear();

      return yearOnly;
    });

  const uniqueDate = Array.from(new Set(years));

  return (
    <>
      <StyledSortedSectionContainer>
        <h3>{headline}</h3>
        <button onClick={handleCollapse}>Drop</button>
        {iscollapsed && (
          <StyledSortedSection>{sortNewestFirst}</StyledSortedSection>
        )}
      </StyledSortedSectionContainer>
    </>
  );
}

const StyledSortedSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
const StyledSortedSection = styled.section`
  display: flex;
  overflow-y: hidden;
`;
