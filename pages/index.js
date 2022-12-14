import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../components/Button/StyledButton";
import Footer from "../components/Footer/Footer";
import { StyledLink } from "../components/GlobalStyles";
import Header from "../components/Header/Header";
import { events } from "../data/events";

export default function Home() {
  const [bookmark, setBookmark] = useState(false);

  function toggleBookmark() {
    setBookmark(!bookmark);
  }

  const EventList = events.map((event) => (
    <StyledLink href="/">
      <article>
        <StyledButton onClick={toggleBookmark}>♡</StyledButton>
        <h3 key={event.id}>{event.name}</h3>
        <div>
          <p>{event.date}</p>
          <p>{event.category}</p>
        </div>
      </article>
    </StyledLink>
  ));

  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>{EventList}</StyledCardSection>
      </StyledMain>
      <Footer />
    </>
  );
}
export const StyledMain = styled.main`
  height: 80vh;
  overflow: scroll;
`;

export const StyledCardSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  gap: 40px;

  :first-child {
    margin-top: 50px;
  }
  :last-child {
    margin-bottom: 50px;
  }

  article {
    background-color: #245669;
    border-radius: 20px;
    width: 80vw;
    box-shadow: 5px 6px 22px 4px #245669;
    padding: 15px 15px 15px 15px;
  }

  h3 {
    font-size: 1.5rem;
    color: white;
    list-style-type: none;
    margin: 0px;
  }

  button {
    color: #ffd3a3;
    float: right;
  }

  div {
    display: flex;
    gap: 30px;
    padding-top: 20px;
  }
`;
