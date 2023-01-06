import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import MagicInput from "./Input";

export default function CreateMemoryForm({ onAddCreateCard }) {
  return (
    <StyledCreateForm onSubmit={onAddCreateCard}>
      <StyledCreateFieldset>
        <MagicInput placeholder="Title" type="text" name="head" required />
        <MagicInput type="checkbox" name="favorite" />
        <MagicInput type="date" name="date" required />
        <MagicInput
          type="textarea"
          name="Memory Details"
          placeholder="...tell me more"
          rows={"10"}
        />
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
    padding: 1em;
  }
`;

const StyledCreateFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  border-color: var(--beaver3);
  color: var(--beaver);

  input {
    align-self: center;
    border: none;
    border-bottom: 1px solid darkgray;
    width: 50%;
    text-align: center;

    :focus {
      outline: transparent;
      text-align: center;
    }

    :placeholder-shown {
      text-align: center;
    }
  }

  label {
    font-size: 1em;
    text-align: center;

    align-self: center;
  }
`;
