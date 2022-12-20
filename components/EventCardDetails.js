import BookmarkButton from "./BookmarkButton";
import { StyledLocationLink } from "./GlobalStyles";

export default function EventCardDetails({ currentEvent, onToggleFavorite }) {
  return (
    <article>
      <h4>{currentEvent.name}</h4>
      <BookmarkButton
        isFavorite={currentEvent.isFavorite}
        onToggleFavorite={onToggleFavorite}
        id={currentEvent.id}
      />
      <p>date: {currentEvent.date}</p>
      <StyledLocationLink
        href={`https://www.google.com/maps/place/${currentEvent.location}`}
      >
        <p>Location: {currentEvent.location}</p>
      </StyledLocationLink>
      <p>more text</p>
    </article>
  );
}
