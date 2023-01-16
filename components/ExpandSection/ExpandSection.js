import { useState } from "react";
import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import ArrowIcon from "../Icons/ArrowIcon";

export default function ExpandSection({ data: renderedChildren, headline }) {
  const [isExpanded, setIsExpanded] = useState(true);

  function handleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <StyledExpandedContainer>
      <div>
        <StyledButtonFrame onClick={handleExpanded}>
          {headline}
        </StyledButtonFrame>
        <ArrowIcon active fill={"var(--beaver1)"} width="20" />
      </div>
      {isExpanded && <StyledShelf>{renderedChildren}</StyledShelf>}
    </StyledExpandedContainer>
  );
}

const StyledExpandedContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100vw;
  overflow-y: hidden;

  button {
    color: var(--beaver2);
    padding: 1em;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const StyledShelf = styled.section`
  display: flex;
  overflow-y: hidden;
`;
