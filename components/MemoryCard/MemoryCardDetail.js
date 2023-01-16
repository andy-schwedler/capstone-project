import styled from "styled-components";
import { rearrangeDates } from "../../helpers/sortingLogic";
import BookmarkButton from "../BookmarkButton";

export default function MemoryCardDetail({ currentEvent, onToggleFavorite }) {
  // this will rearrange the date to a more beaver friendly format
  const formatDate = rearrangeDates(currentEvent.date);

  return (
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
