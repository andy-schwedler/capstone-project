import { useState } from "react";
import styled, { css } from "styled-components";

import ArrowIcon from "../Icons/ArrowIcon";

export default function CollapseSection({ data, headline }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

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
        {isCollapsed && <StyledShelf>{renderedChildren}</StyledShelf>}
      </StyledCollapsedSectionContainer>
    </>
  );
}

const StyledCollapsedSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100vw;
  overflow: hidden;

  h3 {
    margin-left: 0.3em;
    color: var(--beaver2);
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const StyledShelf = styled.section`
  display: flex;
  overflow-y: scroll;
`;
