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
  color: var(--beaver2);
  background-color: var(--beaver1);
  grid-column: 2 / 7;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  bottom: 1.8em;
  width: 60vw;
  padding: 0.4rem;
  align-self: center;
  border-bottom-left-radius: 0.8em;
  border-bottom-right-radius: 0.8em;
  transform: inherit;

  button {
    padding: 0.4rem;
  }
`;
