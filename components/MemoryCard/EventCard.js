import BookmarkButton from "../BookmarkButton";
import { StyledLink } from "../GlobalStyles";

export default function EventCard({ sampleEvent, onToggleFavorite }) {
  return (
    <>
      <article>
        <BookmarkButton
          isFavorite={sampleEvent.isFavorite}
          id={sampleEvent.id}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledLink href={`/${sampleEvent.id}`}>
          <h3>{sampleEvent.date}</h3>
          <h4>{sampleEvent.name}</h4>
        </StyledLink>
      </article>
    </>
  );
}
