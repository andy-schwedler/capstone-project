import BookmarkButton from "./BookmarkButton";

export default function EventCard({ sampleEvent, onToggleFavorite }) {
  return (
    <article>
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
    </article>
  );
}
