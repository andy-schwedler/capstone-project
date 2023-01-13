import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import InputAndLabelDatePair from "./Input/InputAndLabelDatePair";
import InputAndLabelTextPair from "./Input/InputAndLabelTextPair";

export default function CreateMemoryForm({ onAddCreateCard }) {
  return (
    <StyledCreateForm aria-label="create card form" onSubmit={onAddCreateCard}>
      <StyledFieldset aria-label="insert your memories here">
        <InputAndLabelDatePair type="checkbox" name="favorite" />
        <InputAndLabelDatePair type="date" name="date" required />
        <InputAndLabelTextPair
          placeholder="Title"
          type="text"
          name="headline"
          required
        />
        <InputAndLabelTextPair
          type="textarea"
          name="details"
          placeholder="...tell me more"
        />
        <StyledButtonWrapper>
          <StyledButtonFrame aria-label="submit form" type="submit">
            OK
          </StyledButtonFrame>
          <StyledButtonFrame aria-label="reset form" type="reset">
            RESET
          </StyledButtonFrame>
        </StyledButtonWrapper>
      </StyledFieldset>
    </StyledCreateForm>
  );
}

export const StyledCreateForm = styled.form`
  border: none;
  outline: none;
  width: 50vw;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5em;
`;
const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border: none;
  color: var(--beaver);
`;
