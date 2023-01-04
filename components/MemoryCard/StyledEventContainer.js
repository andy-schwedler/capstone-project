import styled from "styled-components";

export const StyledEventContainer = styled.article`
  align-self: center;
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(5, auto);
  background-color: var(--beaver2);
  border-radius: 20px;
  padding: 15px;
  color: var(--beaver3);
  align-items: center;
  margin: 0;

  a {
    grid-column: 1 / 6;
    text-align: left;
    h3 {
      margin: 0.5em, 0, 1em, 0;
    }
  }

  button {
    grid-column-start: -1;
    justify-self: flex-end;
  }

  p {
    grid-column: 1 / 5;
    grid-row: 1;
    margin: 0;
    font-style: italic;
    font-size: small;
    justify-self: flex-start;
    align-self: center;
    opacity: 50%;
  }
`;
