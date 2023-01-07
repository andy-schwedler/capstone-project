import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import MagicInput from "./MagicInput";

export default function CreateMemoryForm({ onAddCreateCard }) {
  return (
    <StyledForm onSubmit={onAddCreateCard}>
      <StyledFieldset>
        <MagicInput type="checkbox" name="favorite" />
        <MagicInput type="date" name="date" required />
        <MagicInput placeholder="Title" type="text" name="headline" required />
        <MagicInput
          type="textarea"
          name="details"
          placeholder="...tell me more"
          rows={"10"}
        />
        <StyledButtonwrapper>
          <StyledButtonFrame type="submit">OK</StyledButtonFrame>
          <StyledButtonFrame type="reset">RESET</StyledButtonFrame>
        </StyledButtonwrapper>
      </StyledFieldset>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  border: none;
  outline: none;
  width: 50vw;
`;

const StyledButtonwrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5em;
`;
const StyledFieldset = styled.fieldset`
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

  label {
    font-size: 1em;
    text-align: center;
    align-self: center;
  }
`;
