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
      <StyledHead>
        <StyledHeadline onClick={handleExpanded}>{headline}</StyledHeadline>
        <ArrowIcon active fill={"var(--beaver1)"} width="20" />
      </StyledHead>
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
`;

const StyledShelf = styled.section`
  display: flex;
  overflow-y: hidden;
`;

const StyledHeadline = styled(StyledButtonFrame)`
  font-size: large;
  color: var(--beaver2);
  padding: 0.4em;
`;

const StyledHead = styled.div`
  display: flex;
`;
