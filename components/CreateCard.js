import styled from "styled-components";
import { StyledButtonFrame } from "./GlobalStyles";

export default function CreateCard({ onHandleIsCreating, onAddCreateCard }) {
  return (
    <StyledCreatePage>
      <StyledButtonFrame onClick={onHandleIsCreating}>❌</StyledButtonFrame>
      <form onSubmit={onAddCreateCard}>
        <label htmlFor="memory">your thought</label>
        <input type="date" name="date" />
        <textarea placeholder="your favorite moment" name="memory" />
        <div>
          <StyledButtonFrame type="submit">create</StyledButtonFrame>
          <StyledButtonFrame type="reset">reset</StyledButtonFrame>
        </div>
      </form>
    </StyledCreatePage>
  );
}

const StyledCreatePage = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 30vh;
  justify-content: center;
  align-items: center;
  right: 0;
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
