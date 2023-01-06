import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import MagicInput from "./Input";

export default function CreateMemoryForm({ onAddCreateCard }) {
  return (
    <StyledCreateForm onSubmit={onAddCreateCard}>
      <StyledCreateFieldset>
        <MagicInput type="text" label="Memory Header" />
        <MagicInput type="checkbox" label="favorit" />
        <MagicInput type="date" label="date" />
        <MagicInput type="textarea" label="Memory Details" rows="4" cols="50" />
        <StyledButtonFrame type="submit">create</StyledButtonFrame>
        <StyledButtonFrame type="reset">reset</StyledButtonFrame>
      </StyledCreateFieldset>
    </StyledCreateForm>
  );
}

const StyledCreateForm = styled.form`
  padding: 1.8em;
  color: var(--beaver2);
  max-width: 800px;
`;
const StyledCreateFieldset = styled.fieldset`
  border: 1px solid red;
  display: grid;
  gap: 1em;
`;
