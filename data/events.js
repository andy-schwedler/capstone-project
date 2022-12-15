import { nanoid } from "nanoid";
import { StyledLink } from "../components/GlobalStyles";
import BookmarkButton from "../components/Icons/BookmarkButton";

export const events = [
  { id: nanoid(), name: "Beaverletics", date: "24.12.2023", category: "easy" },
  {
    id: nanoid(),
    name: "Beaverletics",
    date: "25.12.2023",
    category: "medium",
  },
  { id: nanoid(), name: "Beaverletics", date: "26.12.2023", category: "hard" },
  { id: nanoid(), name: "Beaverletics", date: "27.12.2023", category: "easy" },
  {
    id: nanoid(),
    name: "Beaverletics",
    date: "28.12.2023",
    category: "medium",
  },
  { id: nanoid(), name: "Beaverletics", date: "29.12.2023", category: "hard" },
  { id: nanoid(), name: "Beaverletics", date: "30.12.2023", category: "gold" },
];

export const Eventlist = (
  <>
    {events.map((event) => (
      <StyledLink href="/" key={event.id}>
        <article>
          <BookmarkButton />
          <h3 key={event.id}>{event.name}</h3>
          <div>
            <p>{event.date}</p>
            <p>{event.category}</p>
          </div>
        </article>
      </StyledLink>
    ))}
  </>
);
