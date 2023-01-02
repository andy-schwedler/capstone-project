import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";

export default function EventCardDetails({ currentEvent, onToggleFavorite }) {
  function changeDate(date) {
    const changedDate = new Date(date);
    const day = String(changedDate.getDate()).padStart(2, "0");
    const month = String(changedDate.getMonth() + 1).padStart(2, "0");
    const year = changedDate.getFullYear();

    return `${day}.${month}.${year}`;
  }

  const formatDate = changeDate(currentEvent.date);

  return (
    <>
      <StyledDetailFrame>
        <BookmarkButton
          isFavorite={currentEvent.isFavorite}
          onToggleFavorite={onToggleFavorite}
          id={currentEvent.id}
        />
        <p>date: {formatDate}</p>
        <h3>{currentEvent.name}</h3>
      </StyledDetailFrame>
    </>
  );
}

const StyledDetailFrame = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  background-color: var(--beaver3);
  border-radius: 20px;
  color: var(--beaver2);
  justify-content: center;
`;
