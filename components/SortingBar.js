import styled from "styled-components";
import { StyledButtonFrame } from "./GlobalStyles";

export default function SortingBar({ onAscendingSort, onDescendingSort }) {
  return (
    <StyledSortingContainer>
      <StyledButtonFrame aria-label="sort ascending" onClick={onAscendingSort}>
        oldest first
      </StyledButtonFrame>
      <StyledButtonFrame aria-label="sort ascending" onClick={onDescendingSort}>
        newest first
      </StyledButtonFrame>
    </StyledSortingContainer>
  );
}

const StyledSortingContainer = styled.section`
  display: flex;
  gap: 1em;
`;
