import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import MagicInput from "./MagicInput";

export default function EditForm({
  onEditSubmit,
  sampleEvent,
  onToggleDisplay,
  onCancel,
}) {
  return (
    <StyledForm onSubmit={onEditSubmit}>
      <MagicInput
        name="date"
        type="date"
        label="date"
        defaultValue={sampleEvent.date}
      />
      <MagicInput
        name="headline"
        type="text-not-required"
        defaultValue={sampleEvent.headline}
      />
      <div>
        <StyledButtonFrame type="submit">OK</StyledButtonFrame>
        <StyledButtonFrame onClick={onCancel} type="button">
          CANCEL
        </StyledButtonFrame>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  grid-column: 1 / 6;
  grid-row: 1 / 1;
  padding: 0.5em;

  input {
    border-radius: 0.5rem;
    height: 2rem;
    caret-color: var(--beaver2);
    color: var(--beaver2);
    margin: 1em;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding: 0.4em;
  }
`;
