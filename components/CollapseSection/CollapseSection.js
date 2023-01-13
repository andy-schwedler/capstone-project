import { Fragment, useState } from "react";
import styled from "styled-components";
import { sortNewestFirst } from "../../helpers/sortingLogic";
import MemoryPreview from "../MemoryCard/MemoryPreview";

export default function CollapseSection({
  sampleEvents,
  onToggleFavorite,
  headline,
}) {
  const [iscollapsed, setIsCollapsed] = useState(true);

  function handleCollapse() {
    setIsCollapsed(!iscollapsed);
  }

  const sortedDescending = sortNewestFirst(sampleEvents)?.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <MemoryPreview
        sampleEvent={sampleEvent}
        onToggleFavorite={onToggleFavorite}
      />
    </Fragment>
  ));

  return (
    <>
      <StyledCollapsedSectionContainer>
        <h2 onClick={handleCollapse}>{headline}</h2>
        {iscollapsed && (
          <StyledSortedSection>{sortedDescending}</StyledSortedSection>
        )}
      </StyledCollapsedSectionContainer>
    </>
  );
}

const StyledCollapsedSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const StyledSortedSection = styled.section`
  display: flex;
  overflow-y: scroll;
`;
