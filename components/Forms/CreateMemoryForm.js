import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import MagicInput from "./Input";

export default function CreateMemoryForm({ onAddCreateCard }) {
  return (
    <StyledCreateForm onSubmit={onAddCreateCard}>
      <StyledCreateFieldset>
        <MagicInput placeholder="Title" type="text" name="headline" required />
        <MagicInput type="checkbox" name="favorite" />
        <MagicInput type="date" name="date" required />
        <MagicInput
          type="textarea"
          name="details"
          placeholder="...tell me more"
          rows={"10"}
        />
        <MagicInput type="text2" name="tag" />
        <div>
          <StyledButtonFrame type="submit">OK</StyledButtonFrame>
          <StyledButtonFrame type="reset">RESET</StyledButtonFrame>
        </div>
      </StyledCreateFieldset>
    </StyledCreateForm>
  );
}

const StyledCreateForm = styled.form`
  border: none;
  outline: none;
  width: 50vw;

  div {
    display: flex;
    justify-content: space-evenly;
    padding: 0.5em;
  }
`;

const StyledCreateFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  border: 1px solid var(--beaver3);
  color: var(--beaver);

  input {
    align-self: center;
    border: none;
    border-bottom: 1px solid darkgray;
    width: 100%;
    text-align: center;

    :focus {
      outline: transparent;
      text-align: center;
    }

    :placeholder-shown {
      text-align: center;
    }
  }

  input[name="details"] {
    height: 2em;
    text-align: center;
  }

  label {
    font-size: 1em;
    text-align: center;

    align-self: center;
  }
`;
