import styled from "styled-components";
import { StyledLink } from "../components/GlobalStyles";
import Header from "../components/Header/Header";
import { events } from "../data/events";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CardContainer>{EventList}</CardContainer>
      </main>
    </>
  );
}

export const EventList = events.map((event) => (
  <article>
    <li key={event.id}>
      <StyledLink href="/">{event.name}</StyledLink>
    </li>
    <p>{event.date}</p>
  </article>
));

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  gap: 20px;

  article {
    border: 1px solid black;
    background-color: #245669;
    border-radius: 20px;
    width: 60%;
    padding-left: 20px;
  }

  li {
    font-size: x-large;
    color: white;
    list-style-type: none;
    margin-top: 10px;
  }
  li:link {
    color: white;
  }

  p {
    margin-top: 5px;
    color: whitesmoke;
  }
`;
