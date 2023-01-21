import Image from "next/image";
import styled from "styled-components";
import { rearrangeDates } from "../../helpers/sortingLogic";
import BookmarkButton from "../BookmarkButton";

export default function MemoryCardOverview({ currentEvent, onToggleFavorite }) {
  // this will rearrange the date to a more beaver friendly format
  const formatDate = rearrangeDates(currentEvent.date);

  return (
    <StyledDetailFrame>
      <StyledHeader>
        <BookmarkButton
          id={currentEvent.id}
          isFavorite={currentEvent.isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <h3>{currentEvent.headline}</h3>
        <p>{formatDate}</p>
      </StyledHeader>
      <StyledContentContainer>
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
      </StyledContentContainer>
    </StyledDetailFrame>
  );
}

const StyledDetailFrame = styled.article`
  align-self: center;
  border-radius: 1em;
  //            var(--beaver3) with 80% opacity
  background-color: rgba(255, 211, 163, 0.8);
  max-width: 50vw;
  display: grid;
  color: var(--beaver);
  padding: 1em;
  gap: 2em;
  box-shadow: 0 0 0.9em #ccc;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    text-align: center;
    font-size: small;
    margin: 0;
    margin-bottom: 1em;
  }

  p::selection {
    background-color: var(--beaver);
  }

  img {
    align-self: center;
    grid-column: 1 / 3;
    grid-row: 3;
    width: auto;
    height: auto;
    border-radius: 0.5em;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;

  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;
