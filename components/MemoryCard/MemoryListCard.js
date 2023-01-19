import { useState } from "react";
import styled from "styled-components";
import { rearrangeDates } from "../../helpers/sortingLogic";
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

  function handleCancelButton() {
    if (confirm("Are you sure you want to discard your unsaved changes?")) {
      setDisplayOptionMenu(false);
      setEditMode(false);
    }
    return;
  }

  function toggleDisplayOptionMenu() {
    setDisplayOptionMenu(!displayOptionMenu);
  }

  function handleToggleEditMode() {
    setEditMode(!editMode);
    toggleDisplayOptionMenu();
  }

  function handleEditSubmit(event) {
    event.preventDefault();

    const editedHeadline = event.target.headline.value;
    const editModeInput = { headline: editedHeadline };

    // //update on mongodb
    onEditMemory(editModeInput, sampleEvent.id);

    // user has to confirm changes made
    if (confirm("Are you sure you want to save your changes?"))
      handleToggleEditMode();
  }

  const formatDate = rearrangeDates(sampleEvent.date);

  return (
    <StyledMemoryContainer>
      <StyledButtonFrame
        name="options"
        aria-label="options"
        onClick={toggleDisplayOptionMenu}
      >
        <MoreOptionsIcon alt="options icon" fill="var(--beaver1)" width={20} />
      </StyledButtonFrame>
      {editMode ? (
        <EditForm
          sampleEvent={sampleEvent}
          onEditSubmit={handleEditSubmit}
          onToggleEdit={handleToggleEditMode}
          onToggleDisplay={toggleDisplayOptionMenu}
          onCancel={handleCancelButton}
        />
      ) : (
        <StyledFrame>
          <StyledLink aria-label="detailspage" href={`/${sampleEvent.id}`}>
            <h3>{sampleEvent.headline}</h3>
            <p> {formatDate} </p>
          </StyledLink>
        </StyledFrame>
      )}
      {displayOptionMenu && (
        <OptionsMenu
          onDelete={onDelete}
          onToggleEdit={handleToggleEditMode}
          onToggleDisplay={toggleDisplayOptionMenu}
          sampleEvent={sampleEvent}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </StyledMemoryContainer>
  );
}

const StyledFrame = styled.div`
  padding: 1em;
  grid-column: 1 / span 2;
`;

export const StyledMemoryContainer = styled.article`
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(4, auto);
  background-color: var(--beaver);
  border-radius: 0.3rem;
  color: #efefef;
  align-self: center;
  margin: 1.2em;

  a {
    grid-column: span 3;
    text-align: left;
  }

  button {
    grid-row: 1;
    grid-column: 3;
  }

  h3 {
    font-weight: 300;
    margin: 0;
  }

  p {
    font-style: italic;
    font-size: small;
    opacity: 50%;
    margin: 0;
  }
`;
