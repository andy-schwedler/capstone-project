import styled from "styled-components";

export const StyledCreatePage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 50vh;
  background-color: var(--beaver3);

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  input {
    width: 60vw;
    height: 20px;
    border: 1px solid black;
    border-radius: 10px;
    color: var(--beaver);
    grid-row: 4;

    :focus {
      outline-color: var(--beaver);
    }
  }
  label {
    font-size: smaller;
  }

  button {
    font-size: large;
    align-self: flex-start;
  }
`;
