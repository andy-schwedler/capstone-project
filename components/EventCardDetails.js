import BookmarkButton from "./BookmarkButton";
import { StyledLocationLink } from "./GlobalStyles";

export default function EventCardDetails({ currentEvent, onToggleFavorite }) {
  return (
    <article>
      {/* <BookmarkButton
        isFavorite={currentEvent.isFavorite}
        id={currentEvent.id}
        onToggleFavorite={onToggleFavorite}
      /> */}
      <h4>{currentEvent.name}</h4>
      <p>date: {currentEvent.date}</p>
      <StyledLocationLink
        href={`https://www.google.com/maps/place/${currentEvent.location}`}
      >
        <p>Location: {currentEvent.location}</p>
      </StyledLocationLink>
      <p>
        more text more text more text more text more text more text more text
        more text more text more text more text more text more text more text
        more text more text more text more text more text more text more text
        more text more text more text more text more text more text more text
        more text more text more text more text more text more text more text
        more text more text more text more text more text more text more text
        more text more text more text more text more text more text more text
        more text more text
      </p>
    </article>
  );
}
