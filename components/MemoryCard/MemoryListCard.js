import { useState } from "react";
import styled from "styled-components";
import EditForm from "../Forms/EditForm";
import { StyledButtonFrame, StyledLink } from "../GlobalStyles";
import MoreOptionsIcon from "../Icons/MoreOptionsIcon";
import OptionsMenu from "../OptionsMenu/OptionsMenu";

export default function MemoryListCard({
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

    // user has to confirm changes made
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
            <EditForm
              sampleEvent={sampleEvent}
              onEditSubmit={handleEditSubmit}
              onToggleEdit={handleToggleEditMode}
              onToggleDisplay={toggleDisplayOptionMenu}
            />
          </>
        ) : (
          <StyledLink href={`/${sampleEvent.id}`}>
            <p>{sampleEvent.date}</p>
            <h3>{sampleEvent.name}</h3>
          </StyledLink>
        )}
      </StyledEventContainer>
      {displayOptionMenu && (
        <OptionsMenu
          onDelete={onDelete}
          onToggleEdit={handleToggleEditMode}
          onToggleDisplay={toggleDisplayOptionMenu}
          sampleEvent={sampleEvent}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </>
  );
}

const StyledEventContainer = styled.article`
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(5, auto);
  background-color: var(--beaver2);
  border-radius: 0.8rem;
  padding: 0.3em;
  color: var(--beaver3);
  align-items: center;
  margin-bottom: 1.1rem;

  a {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
    text-align: left;
    margin-bottom: 0.8rem;
    padding: 0.3em;
    gap: 0.8em;
    display: flex;
    flex-direction: column;
  }

  button {
    grid-column-start: -1;
    justify-self: flex-end;
  }

  p {
    grid-column: 1 / span 2;
    grid-row: 1;
    font-style: italic;
    font-size: small;
    justify-self: flex-start;
    opacity: 50%;
    margin: 0;
  }
`;

// to be replaced with EditForm.js
const StyledForm = styled.form`
  grid-column: 1 / 6;
  grid-row: 1 / 1;
  padding: 0.5em;

  input {
    border-radius: 0.5rem;
    height: 2rem;
    caret-color: var(--beaver2);
    color: var(--beaver2);
    margin: 1em;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding: 0.4em;
  }
`;
