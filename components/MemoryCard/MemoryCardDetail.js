import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";

export default function MemoryCardDetail({ currentEvent, onToggleFavorite }) {
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
        <StyledTextFormatter>
          <BookmarkButton
            isFavorite={currentEvent.isFavorite}
            onToggleFavorite={onToggleFavorite}
            id={currentEvent.id}
          />
          <p>date: {formatDate}</p>
          <h3>{currentEvent.headline}</h3>
          <p>{currentEvent.details}</p>
        </StyledTextFormatter>
      </StyledDetailFrame>
    </>
  );
}

const StyledDetailFrame = styled.article`
  align-self: center;
  border-radius: 3rem;
  background-color: rgba(255, 211, 163, 0.8);
  opacity: 80%;
  max-width: 60vw;
`;

const StyledTextFormatter = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  justify-content: center;
  color: var(--beaver2);
  padding: 8%;
`;
