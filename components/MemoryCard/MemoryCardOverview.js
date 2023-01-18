import Image from "next/image";
import styled from "styled-components";
import { rearrangeDates } from "../../helpers/sortingLogic";
import BookmarkButton from "../BookmarkButton";
import { StyledGridWrapper } from "../GlobalStyles";

export default function MemoryCardDetail({ currentEvent, onToggleFavorite }) {
  // this will rearrange the date to a more beaver friendly format
  const formatDate = rearrangeDates(currentEvent.date);

  return (
    <StyledGridWrapper>
      <StyledDetailFrame>
        <StyledTextFormatter>
          <h3>{currentEvent.headline}</h3>
          <BookmarkButton
            isFavorite={currentEvent.isFavorite}
            onToggleFavorite={onToggleFavorite}
            id={currentEvent.id}
          />
          <p>date: {formatDate}</p>
          <p>{currentEvent.details}</p>
          <Image />
        </StyledTextFormatter>
      </StyledDetailFrame>
    </StyledGridWrapper>
  );
}

const StyledDetailFrame = styled.article`
  justify-self: center;
  border-radius: 1em;
  background-color: rgba(255, 211, 163, 0.8);
  max-width: 80vw;
`;

const StyledTextFormatter = styled.div`
  display: grid;
  color: var(--beaver2);
  padding: 2em;
`;
