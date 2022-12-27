import BookmarkButton from "../BookmarkButton";
import { StyledLink } from "../GlobalStyles";
import { StyledEventContainer } from "./StyledEventCard";

export default function EventCard({ sampleEvent, onToggleFavorite }) {
  return (
    <>
      <StyledEventContainer>
        <StyledLink href={`/${sampleEvent.id}`}>
          <h1>{sampleEvent.name}</h1>
          <p>{sampleEvent.date}</p>
        </StyledLink>
        <BookmarkButton
          isFavorite={sampleEvent.isFavorite}
          id={sampleEvent.id}
          onToggleFavorite={onToggleFavorite}
        />
      </StyledEventContainer>
    </>
  );
}
