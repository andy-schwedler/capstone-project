import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import InputAndLabel from "./Input/InputAndLabel";

export default function EditForm({ onEditSubmit, sampleEvent, onCancel }) {
  return (
    <StyledForm
      aria-label="edit memory"
      onSubmit={() => onEditSubmit(event, sampleEvent.id)}
    >
      <InputAndLabel
        name="headline"
        type="text-not-required"
        defaultValue={sampleEvent.headline}
      />
      <section>
        <StyledButtonFrame
          name="submit"
          aria-label="submit changes"
          type="submit"
        >
          OK
        </StyledButtonFrame>
        <StyledButtonFrame
          name="reset"
          aria-label="close form"
          onClick={onCancel}
          type="button"
        >
          CANCEL
        </StyledButtonFrame>
      </section>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  grid-column: 1 / 4;
  grid-row: 1 / 1;
  padding: 0.5em;

  input {
    border-radius: 0.5rem;
    height: 2rem;
    caret-color: var(--beaver1);
    color: var(--beaver1);
    margin: 1em;
  }
  // needs to be replaced with Styled Component
  section {
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding: 0.4em;
  }
`;
