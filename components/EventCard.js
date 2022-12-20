import BookmarkButton from "./BookmarkButton";
import { StyledLink } from "./GlobalStyles";

export default function EventCard({ sampleEvent, onToggleFavorite }) {
  return (
    <>
      <article>
        <StyledLink href={`/${sampleEvent.id}`}>
          <BookmarkButton
            isFavorite={sampleEvent.isFavorite}
            id={sampleEvent.id}
            onToggleFavorite={onToggleFavorite}
          />
          <h3>{sampleEvent.date}</h3>
          <h4>{sampleEvent.name}</h4>
          <p>more text</p>
        </StyledLink>
      </article>
    </>
  );
}

// Eventcard small

// <article>
//         <BookmarkButton
//           isFavorite={sampleEvent.isFavorite}
//           id={sampleEvent.id}
//           onToggleFavorite={onToggleFavorite}
//         />
//         <h3>{sampleEvent.date}</h3>
//         <p>{sampleEvent.name}</p>
//         <p>{sampleEvent.category}</p>
//       </article>
