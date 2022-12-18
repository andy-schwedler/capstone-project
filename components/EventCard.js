import styled from "styled-components";
import BookmarkButton from "./BookmarkButton";
import { StyledCard } from "./GlobalStyles";

export default function EventCard({ sampleEvent, onToggleFavorite }) {
  return (
    <StyledCard>
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
    </StyledCard>
  );
}

export const StyledCardSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  gap: 40px;
  overflow: scroll;

  :first-child {
    margin-top: 30px;
  }
  :last-child {
    margin-bottom: 70px;
  }

  article {
    background-color: #245669;
    border-radius: 20px;
    width: 70vw;
    /* box-shadow: 5px 6px 22px 4px #245669; */
    padding: 15px;
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
