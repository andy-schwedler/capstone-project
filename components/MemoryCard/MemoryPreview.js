import Link from "next/link";
import styled from "styled-components";
import { BookmarkIcon } from "../Icons/BookmarkIcon";

export default function MemoryPreview({ sampleEvent }) {
  const previewDetails = sampleEvent.details
    .slice()
    .substring(0, 30)
    .padEnd(33, ".");

  return (
    <StyledContainerLink aria-label="detailspage" href={`/${sampleEvent.id}`}>
      <h5>{sampleEvent.headline}</h5>
      <p>{previewDetails}</p>
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
  display: grid;
  grid-template-columns: repeat(3, auto);
  border: 1px solid var(--beaver2);
  background-color: var(--beaver3);
  justify-content: center;
  align-items: center;
  border-radius: 0.2em;
  padding: 0.4rem;
  text-decoration: none;
  min-width: 10em;
  height: 8em;
  margin: 0.8em;

  h5 {
    margin: 0;
    grid-column: 1 / span 3;
    grid-row: 1;
    padding: 0;
  }

  p {
    text-align: justify;
    font-style: italic;
    font-size: 0.8em;
    grid-column: 1 / span 3;
    grid-row: 2;
    margin: 0;
  }

  svg {
    grid-column: -1;
    grid-row: -1;
  }

  :link,
  :visited {
    color: inherit;
  }
`;
