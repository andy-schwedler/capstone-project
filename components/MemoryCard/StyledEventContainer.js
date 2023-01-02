import styled from "styled-components";

export const StyledEventContainer = styled.article`
  align-self: center;
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  background-color: var(--beaver2);
  border-radius: 20px;
  padding: 15px;
  color: var(--beaver3);
  align-items: center;
  margin: 0;

  a {
    grid-column: 1 / span 4;
    text-align: left;
  }

  button {
    grid-column-start: -1;
    justify-self: flex-end;
  }

  p {
    grid-column: 1 / span 3;
    grid-row: 2;
    margin: 0;
    font-style: italic;
    font-size: small;
    justify-self: flex-start;
    align-self: center;
    opacity: 50%;
  }
`;
