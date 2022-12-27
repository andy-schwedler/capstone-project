import BookmarkButton from "../BookmarkButton";
import { StyledLink } from "../GlobalStyles";
import { StyledEventCard } from "./StyledEventCard";

export default function EventCard({ sampleEvent, onToggleFavorite }) {
  return (
    <>
      <StyledEventCard>
        <StyledLink href={`/${sampleEvent.id}`}>
          <h1>{sampleEvent.name}</h1>
          <p>{sampleEvent.date}</p>
        </StyledLink>
        <BookmarkButton
          isFavorite={sampleEvent.isFavorite}
          id={sampleEvent.id}
          onToggleFavorite={onToggleFavorite}
        />
      </StyledEventCard>
    </>
  );
}
