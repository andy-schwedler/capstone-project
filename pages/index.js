import { useState } from "react";
import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StyledMain } from "../components/GlobalStyles";
import { initialEvents } from "../data/events";
import EventCard from "../components/EventCard";
import styled from "styled-components";

export default function Home() {
  const [events, setEvents] = useState(initialEvents);
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }

  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>
          {events.map((event) => (
            <Fragment key={event.id}>
              <EventCard
                event={event}
                isActive={isActive}
                onToggle={handleToggle}
              />
            </Fragment>
          ))}
        </StyledCardSection>
      </StyledMain>
      <Footer />
    </>
  );
}

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
    margin-bottom: 70px;
  }

  article {
    background-color: #245669;
    border-radius: 20px;
    width: 70vw;
    box-shadow: 5px 6px 22px 4px #245669;
    padding: 15px;
  }
  img {
    float: right;
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
    color: white;
    font-style: italic;
  }
`;
