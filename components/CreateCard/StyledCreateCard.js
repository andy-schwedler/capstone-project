import styled from "styled-components";

export const StyledCreatePage = styled.section`
  justify-self: center;
  display: flex;
  flex-direction: column;
  background-color: var(--beaver3);
  color: var(--beaver2);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px;

  fieldset {
    display: flex;
    flex-direction: column;
    border-color: transparent;
  }

  legend {
    margin-bottom: 10px;
  }

  label {
    font-size: small;
    align-self: center;
  }

  textarea,
  input {
    grid-area: input;
    height: 2rem;
    border: 1px solid var(--beaver2);
    border-radius: 5px;
    color: var(--beaver2);
    margin: 10px;

    :focus {
      outline-color: var(--beaver2);
      caret-color: var(--beaver2);
    }
    :checked {
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-align: start;
    margin-top: 5px;
    justify-content: space-between;
  }
`;
