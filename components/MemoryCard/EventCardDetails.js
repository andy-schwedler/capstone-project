import BookmarkButton from "../BookmarkButton";
import { StyledLocationLink } from "../GlobalStyles";

export default function EventCardDetails({ currentEvent, onToggleFavorite }) {
  return (
    <>
      <h1>{currentEvent.name}</h1>
      <p>date: {currentEvent.date}</p>
      <StyledLocationLink
        href={`https://www.google.com/maps/place/${currentEvent.location}`}
      >
        <p>📍{currentEvent.location}</p>
      </StyledLocationLink>
      <BookmarkButton
        isFavorite={currentEvent.isFavorite}
        onToggleFavorite={onToggleFavorite}
        id={currentEvent.id}
      />
    </>
  );
}
