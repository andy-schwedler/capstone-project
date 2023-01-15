import Link from "next/link";
import styled from "styled-components";
import { rearrangeDates } from "../../helpers/sortingLogic";
import { BookmarkIcon } from "../Icons/BookmarkIcon";

export default function MemoryPreview({ sampleEvent }) {
  // this will trim the text to 30 letters and add "..." at the end - needs to be more dynamic
  const previewDetails = sampleEvent.details
    ?.slice()
    .substring(0, 10)
    .padEnd(13, ".");

  const timestamp = rearrangeDates(sampleEvent.date);

  return (
    <StyledContainerLink aria-label="detailspage" href={`/${sampleEvent.id}`}>
      <h5>{sampleEvent.headline}</h5>
      <StyledContainer>
        <p>{timestamp}</p>
        <p>{previewDetails}</p>
      </StyledContainer>
      {sampleEvent.isFavorite ? (
        <BookmarkIcon alt="bookmark" fill="red" width={20} height={20} />
      ) : (
        <BookmarkIcon
          alt="bookmark"
          fill="var(--beaver)"
          width={20}
          height={20}
        />
      )}
    </StyledContainerLink>
  );
}

const StyledContainerLink = styled(Link)`
  border: 1px solid var(--beaver);
  background-color: var(--beaver3);
  display: grid;
  min-width: 10rem;
  height: 8em;
  border-radius: 0.2em;
  padding: 0.4rem;
  text-decoration: none;
  margin: 1em 0.5em 1em 0.5em;

  h5 {
    grid-column: 1 / span 4;
    grid-row: 1;
    margin: 0;
    padding: 0;
  }

  div {
    grid-column: 1 / -1;
  }

  svg {
    grid-column: 5;
    grid-row: 1;
  }

  p {
    margin: 0;
  }

  :link,
  :visited {
    color: inherit;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: small;
`;
