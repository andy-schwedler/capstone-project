import Image from "next/image";
import styled from "styled-components";
import { rearrangeDates } from "../../helpers/sortingLogic";
import BookmarkButton from "../BookmarkButton";

export default function MemoryCardDetail({ currentEvent, onToggleFavorite }) {
  // this will rearrange the date to a more beaver friendly format
  const formatDate = rearrangeDates(currentEvent.date);

  return (
    <>
      <StyledDetailFrame>
        <StyledTextFormatter>
          <BookmarkButton
            isFavorite={currentEvent.isFavorite}
            onToggleFavorite={onToggleFavorite}
            id={currentEvent.id}
          />
          <h3>{currentEvent.headline}</h3>
          <p>date: {formatDate}</p>
          <p>{currentEvent.details}</p>
          <Image />
        </StyledTextFormatter>
      </StyledDetailFrame>
    </>
  );
}

const StyledDetailFrame = styled.article`
  align-self: center;
  border-radius: 1em;
  background-color: rgba(255, 211, 163, 0.8);
  max-width: 80vw;
`;

const StyledTextFormatter = styled.div`
  display: grid;
  justify-content: center;
  color: var(--beaver2);
  padding: 8%;
`;
