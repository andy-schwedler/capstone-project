import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import Input from "./Input";

export default function CreateMemoryForm({ onAddCreateCard }) {
  return (
    <StyledCreateForm onSubmit={onAddCreateCard}>
      <StyledCreateFieldset>
        <Input type="text" label="Memory Header" />
        <Input type="checkbox" label="favorit" />
        <Input type="date" label="date" />
        <Input type="textarea" label="Memory Details" rows="4" cols="50" />
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
