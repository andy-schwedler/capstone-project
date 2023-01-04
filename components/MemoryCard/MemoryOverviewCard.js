import BookmarkButton from "../BookmarkButton";
import { StyledButtonFrame, StyledLink } from "../GlobalStyles";
import { StyledEventContainer } from "./StyledEventContainer";

export default function MemoryOverviewCard({
  sampleEvent,
  onToggleFavorite,
  onDelete,
}) {
  return (
    <>
      <StyledEventContainer>
        <BookmarkButton
          isFavorite={sampleEvent.isFavorite}
          id={sampleEvent.id}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledButtonFrame onClick={() => onDelete(sampleEvent.id)}>
          ❌
        </StyledButtonFrame>
        <StyledLink href={`/${sampleEvent.id}`}>
          <h3>{sampleEvent.name}</h3>
        </StyledLink>
        <p>{sampleEvent.date}</p>
      </StyledEventContainer>
    </>
  );
}
