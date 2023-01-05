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

  function handleToggleEditMode() {
    setEditMode(!editMode);
    toggleDisplayOptionMenu();
  }

  function handleEditSubmit(event) {
    event.preventDefault();

    const editedName = event.target.elements.memory.value;
    const editedDate = event.target.elements.date.value;
    const editModeInput = { name: editedName, date: editedDate };

    // //update on mongodb
    onEditMemory(editModeInput, sampleEvent.id);

    if (confirm("Are you sure you want to save your changes?"))
      handleToggleEditMode();
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
              <label hidden>date</label>
              <input
                name="date"
                type="date"
                defaultValue={sampleEvent.date}
                required
              />
              <label hidden>text</label>
              <input
                name="memory"
                type="text"
                defaultValue={sampleEvent.name}
                required
              />
              <div>
                <StyledButtonFrame type="submit">OK</StyledButtonFrame>
                <StyledButtonFrame onClick={handleToggleEditMode} type="button">
                  CANCEL
                </StyledButtonFrame>
              </div>
            </StyledForm>
          </>
        ) : (
          <StyledLink href={`/${sampleEvent.id}`}>
            <p>{sampleEvent.date}</p>
            <h3>{sampleEvent.name}</h3>
          </StyledLink>
        )}
      </StyledEventContainer>
      {displayOptionMenu && (
        <StyledMenu>
          <StyledButtonFrame onClick={handleToggleEditMode}>
            EDIT
          </StyledButtonFrame>
          <StyledButtonFrame onClick={() => onDelete(sampleEvent.id)}>
            REMOVE
          </StyledButtonFrame>
          <StyledButtonFrame onClick={toggleDisplayOptionMenu}>
            CANCEL
          </StyledButtonFrame>
          <BookmarkButton
            onToggleFavorite={() => onToggleFavorite(sampleEvent.id)}
            isFavorite={sampleEvent.isFavorite}
          />
        </StyledMenu>
      )}
    </>
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
