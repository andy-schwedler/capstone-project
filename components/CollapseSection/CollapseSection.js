import { useState } from "react";
import styled, { css } from "styled-components";

import ArrowIcon from "../Icons/ArrowIcon";

export default function CollapseSection({ data, headline }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  const renderedChildren = data;

  return (
    <>
      <StyledCollapsedSectionContainer>
        <div>
          <h3 onClick={handleCollapse}>{headline}</h3>
          <ArrowIcon active fill={"var(--beaver1)"} width="20" />
        </div>
        {isCollapsed && (
          <StyledSortedSection>{renderedChildren}</StyledSortedSection>
        )}
      </StyledCollapsedSectionContainer>
    </>
  );
}

const StyledCollapsedSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1em;

  h3 {
    margin-left: 0.3em;
    color: var(--beaver2);
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const StyledSortedSection = styled.section`
  display: flex;
  overflow-y: scroll;
`;
