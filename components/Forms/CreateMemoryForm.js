import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import InputAndLabelPair from "./Input/InputAndLabelPair";

export default function CreateMemoryForm({ onAddCreateCard }) {
  return (
    <StyledCreateForm onSubmit={onAddCreateCard}>
      <StyledFieldset>
        <InputAndLabelPair type="checkbox" name="favorite" />
        <InputAndLabelPair type="date" name="date" required />
        <InputAndLabelPair
          placeholder="Title"
          type="text"
          name="headline"
          required
        />
        <InputAndLabelPair
          type="textarea"
          name="details"
          placeholder="...tell me more"
        />
        <StyledButtonWrapper>
          <StyledButtonFrame type="submit">OK</StyledButtonFrame>
          <StyledButtonFrame type="reset">RESET</StyledButtonFrame>
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
