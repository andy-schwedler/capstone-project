import BookmarkButton from "./BookmarkButton";
import { StyledCard } from "./GlobalStyles";

export default function EventCard({ sampleEvent, onToggleFavorite }) {
  return (
    <StyledCard>
      <BookmarkButton
        isFavorite={sampleEvent.isFavorite}
        id={sampleEvent.id}
        onToggleFavorite={onToggleFavorite}
      />
      <h3>{sampleEvent.name}</h3>
      <div>
        <p>{sampleEvent.date}</p>
        <p>{sampleEvent.category}</p>
      </div>
    </StyledCard>
  );
}
