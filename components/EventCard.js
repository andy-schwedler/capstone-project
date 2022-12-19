import BookmarkButton from "./BookmarkButton";

export default function EventCard({ sampleEvent, onToggleFavorite }) {
  return (
    <>
      <article>
        <BookmarkButton
          isFavorite={sampleEvent.isFavorite}
          id={sampleEvent.id}
          onToggleFavorite={onToggleFavorite}
        />
        <h3>{sampleEvent.date}</h3>
        <h4>{sampleEvent.name}</h4>
        <p>more text</p>
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
