import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";
import { StyledButtonFrame } from "../GlobalStyles";
import InputAndLabelTextPair from "./Input/InputAndLabelTextPair";

export default function CreateMemoryForm({ onAddCreateCard }) {
  return (
    <StyledCreateForm aria-label="create card form" onSubmit={onAddCreateCard}>
      <StyledFieldset aria-label="insert your memories here">
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
  max-width: 90vw;
  align-self: center;
  border: 1px solid var(--beaver2);
  align-items: center;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: none;
  color: var(--beaver);
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5em;
  width: 100%;
`;
