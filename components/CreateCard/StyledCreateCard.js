import styled from "styled-components";

export const StyledCreatePage = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 30vh;
  align-items: center;
  justify-content: center;
  background-color: var(--beaver3);
  color: var(--beaver2);

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-color: transparent;
    padding: 0px;
  }

  input {
    height: 20px;
    border: 1px solid var(--beaver2);
    border-radius: 5px;
    color: var(--beaver);
    caret-color: transparent;
    margin-left: 10px;
    align-self: center;

    :focus {
      outline-color: var(--beaver2);
      caret-color: var(--beaver2);
    }
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
`;
