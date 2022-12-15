import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import { StyledLink, StyledMain } from "../components/GlobalStyles";
import Header from "../components/Header/Header";
import { events } from "../data/events";
import BookmarkButton from "../components/Icons/BookmarkButton";

export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>
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
    margin-bottom: 50px;
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
  }
`;
