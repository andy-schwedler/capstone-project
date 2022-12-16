import BookmarkButton from "./BookmarkButton";

export default function EventCard({ event, isActive, onToggle }) {
  return (
    <article>
      <BookmarkButton isActive={isActive} onToggle={onToggle} />
      <h3>{event.name}</h3>
      <div>
        <p>{event.date}</p>
        <p>{event.category}</p>
      </div>
    </article>
  );
}
