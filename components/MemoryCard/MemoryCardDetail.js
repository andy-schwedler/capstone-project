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
          <h3>{currentEvent.name}</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
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
  padding: 6%;
`;
