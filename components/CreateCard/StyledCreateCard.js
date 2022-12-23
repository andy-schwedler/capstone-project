import styled from "styled-components";

export const StyledCreatePage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 30vh;
  align-items: center;
  justify-content: center;
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

    :focus {
      outline-color: var(--beaver2);
      caret-color: var(--beaver2);
    }
  }
  label {
    font-size: smaller;
  }

  button {
    font-size: large;
    align-self: flex-start;
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
