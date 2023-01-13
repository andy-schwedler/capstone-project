import Link from "next/link";
import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";

export default function MemoryPreview({ sampleEvent, onToggleFavorite }) {
  const previewDetails = sampleEvent.details.slice().substring(0, 30);

  return (
    <StyledContainerLink aria-label="detailspage" href={`/${sampleEvent.id}`}>
      <h3>{sampleEvent.headline}</h3>
      <p>{previewDetails}</p>
    </StyledContainerLink>
  );
}

const StyledContainerLink = styled(Link)`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  min-width: 12em;
  border: 1px solid var(--beaver2);
  background-color: var(--beaver3);
  justify-content: center;
  align-items: center;
  border-radius: 0.2em;
  padding: 1.2rem;
  text-decoration: none;

  p {
    text-align: justify;
    font-style: italic;
  }

  :link,
  :visited {
    color: inherit;
  }
`;
