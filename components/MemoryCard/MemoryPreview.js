import Link from "next/link";
import styled from "styled-components";
import { rearrangeDates } from "../../helpers/sortingLogic";
import { BookmarkIcon } from "../Icons/BookmarkIcon";
import CameraIcon from "../Icons/CameraIcon";

export default function MemoryPreview({ sampleEvent }) {
  // this will trim the text to 30 letters and add "..." at the end - needs to be more dynamic
  const previewDetails = sampleEvent.details
    ?.slice()
    .substring(0, 40)
    .padEnd(43, ".");

  const formatDate = rearrangeDates(sampleEvent.date);

  return (
    <StyledContainerLink aria-label="detailspage" href={`/${sampleEvent.id}`}>
      <StyledHead>{sampleEvent.headline}</StyledHead>
      <StyledDate>{formatDate}</StyledDate>
      <StyledPreviewContainer>{previewDetails}</StyledPreviewContainer>
      <StyledIconContainer>
        {sampleEvent.isFavorite && (
          <BookmarkIcon alt="bookmark" fill="red" width={20} height={20} />
        )}
        {sampleEvent.picture && <CameraIcon width={20} />}
      </StyledIconContainer>
    </StyledContainerLink>
  );
}

const StyledContainerLink = styled(Link)`
  margin: 1em 0.5em 1em 0.5em;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  text-decoration: none;
  box-shadow: 0 0 0.9em #ccc;
  background-color: var(--beaver3);
  min-width: 10rem;
  max-width: 13rem;
  height: 10rem;
  border-radius: 0.2em;
  padding: 0.8rem;

  :visited,
  :link {
    color: var(--beaver2);
  }
`;

const StyledHead = styled.h5`
  grid-column: 1 / span 3;
  grid-row: 1;
  margin: 0;
  padding: 0;
`;

const StyledDate = styled.p`
  grid-column-start: 1;
  grid-row: 2;
  align-self: center;
  font-size: smaller;
  margin: 0;
`;

const StyledPreviewContainer = styled.p`
  grid-column: 1 / span 5;
  grid-row: 3;
  justify-content: center;
  margin: 0;
  font-size: small;
  font-style: italic;
  color: var(--beaver);
`;

const StyledIconContainer = styled.div`
  grid-column-start: 5;
  grid-row: 1;
`;
