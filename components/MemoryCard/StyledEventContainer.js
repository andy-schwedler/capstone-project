import styled from "styled-components";

export const StyledEventContainer = styled.article`
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(5, auto);
  background-color: var(--beaver2);
  border-radius: 0.8rem;
  padding: 0.3em;
  color: var(--beaver3);
  align-items: center;
  margin-bottom: 1.1rem;

  a {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
    text-align: left;
    margin-bottom: 0.8rem;
    padding: 0.3em;
    gap: 0.8em;
    display: flex;
    flex-direction: column;
  }

  button {
    grid-column-start: -1;
    justify-self: flex-end;
  }

  p {
    grid-column: 1 / span 2;
    grid-row: 1;
    font-style: italic;
    font-size: small;
    justify-self: flex-start;
    opacity: 50%;
    margin: 0;
  }
`;
