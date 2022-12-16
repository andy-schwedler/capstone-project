import BookmarkButton from "./BookmarkButton";

export default function EventCard({ event }) {
  return (
    <article>
      <BookmarkButton />
      <h3>{event.name}</h3>
      <div>
        <p>{event.date}</p>
        <p>{event.category}</p>
      </div>
    </article>
  );
}
