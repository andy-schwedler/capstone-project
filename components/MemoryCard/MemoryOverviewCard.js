import { useState } from "react";
import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";
import { StyledButtonFrame, StyledLink } from "../GlobalStyles";
import MoreOptionsIcon from "../Icons/MoreOptionsIcon";
import { StyledEventContainer } from "./StyledEventContainer";

export default function MemoryOverviewCard({
  sampleEvent,
  onToggleFavorite,
  onDelete,
}) {
  const [editing, setEditing] = useState(false);
  function toggleEditMode() {
    setEditing(!editing);
  }

  return (
    <>
      <StyledEventContainer>
        <StyledButtonFrame onClick={toggleEditMode}>
          {editing ? (
            <MoreOptionsIcon fill={"var(--beaver1)"} width={20} />
          ) : (
            <MoreOptionsIcon fill="white" width={20} />
          )}
        </StyledButtonFrame>
        <StyledLink href={`/${sampleEvent.id}`}>
          <h3>{sampleEvent.name}</h3>
        </StyledLink>
        <p>{sampleEvent.date}</p>
        {editing ? (
          <StyledMenu>
            <StyledButtonFrame>edit</StyledButtonFrame>
            <StyledButtonFrame onClick={() => onDelete(sampleEvent.id)}>
              remove
            </StyledButtonFrame>
            <StyledButtonFrame onClick={toggleEditMode}>
              cancel
            </StyledButtonFrame>
            <BookmarkButton
              isFavorite={sampleEvent.isFavorite}
              id={sampleEvent.id}
              onToggleFavorite={onToggleFavorite}
            />
          </StyledMenu>
        ) : null}
      </StyledEventContainer>
    </>
  );
}

const StyledMenu = styled.div`
  color: var(--beaver2);
  margin-top: 5%;
  background-color: var(--beaver1);
  grid-column: 1 / 7;
  grid-row-start: 6;
  border-radius: 1em;
  display: flex;
  justify-content: space-evenly;
`;
