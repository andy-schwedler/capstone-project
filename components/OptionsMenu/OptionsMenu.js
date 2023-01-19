import React from "react";
import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";
import { StyledButtonFrame } from "../GlobalStyles";

export default function OptionsMenu({
  onDelete,
  onToggleEdit,
  onToggleDisplay,
  onToggleFavorite,
  sampleEvent,
}) {
  return (
    <StyledMenu>
      <StyledButtonFrame
        name="edit"
        aria-label="edit button"
        onClick={onToggleEdit}
      >
        EDIT
      </StyledButtonFrame>

      <StyledButtonFrame
        name="delete"
        aria-label="delete button"
        onClick={() => onDelete(sampleEvent.id)}
      >
        REMOVE
      </StyledButtonFrame>
      <StyledButtonFrame onClick={onToggleDisplay}>CANCEL</StyledButtonFrame>

      <BookmarkButton
        onToggleFavorite={() => onToggleFavorite(sampleEvent.id)}
        isFavorite={sampleEvent.isFavorite}
      />
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  grid-column: 1 / 4;
  display: flex;
  justify-content: space-evenly;
  border-top-right-radius: 0.5em;
  color: var(--beaver);
  background-color: var(--beaver1);

  button {
    padding: 0.4rem;
  }
`;
