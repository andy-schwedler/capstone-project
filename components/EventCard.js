import BookmarkButton from "./BookmarkButton";

export default function EventCard({ event, onToggleFavorite }) {
  return (
    <article>
      <BookmarkButton
        isFavorite={event.isFavorite}
        id={event.id}
        onToggleFavorite={onToggleFavorite}
      />
      <h3>{event.name}</h3>
      <div>
        <p>{event.date}</p>
        <p>{event.category}</p>
      </div>
    </article>
  );
}
