import { useState } from "react";
import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";
import { StyledButtonFrame, StyledForm, StyledLink } from "../GlobalStyles";
import MoreOptionsIcon from "../Icons/MoreOptionsIcon";
import { StyledEventContainer } from "./StyledEventContainer";

export default function MemoryOverviewCard({
  sampleEvent,
  onToggleFavorite,
  onDelete,
  onEditMemory,
}) {
  const [displayOptionMenu, setDisplayOptionMenu] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function toggleDisplayOptionMenu() {
    setDisplayOptionMenu(!displayOptionMenu);
  }

  function handleEditSubmit() {
    setEditMode(!editMode);
    event.preventDefault;

    const form = event.target.elements;

    console.log(form);

    // onEditMemory();
  }

  return (
    <>
      <StyledEventContainer>
        <StyledButtonFrame onClick={toggleDisplayOptionMenu}>
          {displayOptionMenu ? (
            <MoreOptionsIcon fill="var(--beaver1)" width={20} />
          ) : (
            <MoreOptionsIcon fill="var(--beaver3)" width={20} />
          )}
        </StyledButtonFrame>
        {editMode ? (
          <>
            <StyledForm onSubmit={handleEditSubmit}>
              <input type="text" defaultValue={sampleEvent.name} required />
              <StyledButtonFrame type="submit">✔️</StyledButtonFrame>
              <StyledButtonFrame type="reset">reset</StyledButtonFrame>
            </StyledForm>
          </>
        ) : (
          <StyledLink href={`/${sampleEvent.id}`}>
            <p>{sampleEvent.date}</p>
            <h3>{sampleEvent.name}</h3>
          </StyledLink>
        )}
        {displayOptionMenu ? (
          <StyledMenu>
            <StyledButtonFrame onClick={handleEditSubmit}>
              edit
            </StyledButtonFrame>
            <StyledButtonFrame onClick={() => onDelete(sampleEvent.id)}>
              remove
            </StyledButtonFrame>
            <StyledButtonFrame onClick={toggleDisplayOptionMenu}>
              cancel
            </StyledButtonFrame>
            {sampleEvent.isFavorite == true ? (
              <BookmarkButton
                isFavorite={sampleEvent.isFavorite}
                id={sampleEvent.id}
                onToggleFavorite={onToggleFavorite}
              />
            ) : (
              <BookmarkButton
                isFavorite={sampleEvent.isFavorite}
                id={sampleEvent.id}
                onToggleFavorite={onToggleFavorite}
              />
            )}
          </StyledMenu>
        ) : null}
      </StyledEventContainer>
    </>
  );
}

const StyledMenu = styled.div`
  color: var(--beaver2);
  background-color: var(--beaver1);
  grid-column: 1 / 7;
  border-radius: 0.2em;
  display: flex;
  justify-content: space-evenly;
`;
