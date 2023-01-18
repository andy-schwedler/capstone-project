import Image from "next/image";
import styled from "styled-components";
import { rearrangeDates } from "../../helpers/sortingLogic";
import BookmarkButton from "../BookmarkButton";
import { StyledGridWrapper } from "../GlobalStyles";

export default function MemoryCardOverview({ currentEvent, onToggleFavorite }) {
  // this will rearrange the date to a more beaver friendly format
  const formatDate = rearrangeDates(currentEvent.date);

  return (
    <StyledGridWrapper>
      <StyledDetailFrame>
        <StyledTextFormatter>
          <BookmarkButton
            id={currentEvent.id}
            isFavorite={currentEvent.isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
          <h3>{currentEvent.headline}</h3>
          <p>{formatDate}</p>
          <p>{currentEvent.details}</p>
          {currentEvent.picture && (
            <Image
              priority
              width={150}
              height={150}
              src={currentEvent.picture}
              alt={currentEvent.headline}
            />
          )}
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

  img {
    width: auto;
    height: auto;
  }
`;

const StyledTextFormatter = styled.div`
  display: grid;
  color: var(--beaver2);
  padding: 2em;
`;
