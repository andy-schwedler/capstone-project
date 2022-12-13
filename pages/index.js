import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import { StyledLink } from "../components/GlobalStyles";
import Header from "../components/Header/Header";
import { events } from "../data/events";

export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardContainer>{EventList}</StyledCardContainer>
      </StyledMain>
      <Footer />
    </>
  );
}

export const StyledMain = styled.main`
  height: 80vh;
  overflow: scroll;
`;

export const EventList = events.map((event) => (
  <article>
    <li key={event.id}>
      <StyledLink href="/">{event.name}</StyledLink>
    </li>
    <p>{event.date}</p>
    <p>Level: {event.category}</p>
  </article>
));

export const StyledCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  gap: 20px;

  article {
    background-color: #245669;
    border-radius: 20px;
    width: 60%;
    padding-left: 20px;
    box-shadow: 5px 6px 22px 4px #245669;
  }

  li {
    font-size: x-large;
    color: white;
    list-style-type: none;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    color: whitesmoke;
  }
`;
