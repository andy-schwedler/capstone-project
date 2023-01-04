import styled from "styled-components";

export const StyledEventContainer = styled.article`
  align-self: center;
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(5, auto);
  background-color: var(--beaver2);
  border-radius: 20px;
  padding: 1.1em;
  color: var(--beaver3);
  align-items: center;
  margin: 0;
  gap: 0.5rem;

  a {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
    text-align: left;
    padding: 0.5em;
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
    align-self: center;
    opacity: 50%;
    margin: 0;
  }

  form {
    grid-column: 1 / 7;
    grid-row: 1 span 2;
    border: 1px dotted var(--beaver);

    input {
      width: 100%;
      height: 2rem;
      caret-color: var(--beaver1);
      color: var(--beaver1);
    }
  }
`;
