import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import InputAndLabelDatePair from "./Input/InputAndLabelDatePair";
import InputAndLabelTextPair from "./Input/InputAndLabelTextPair";

export default function EditForm({ onEditSubmit, sampleEvent, onCancel }) {
  return (
    <StyledForm aria-label="edit memory" onSubmit={onEditSubmit}>
      <InputAndLabelTextPair
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
    caret-color: var(--beaver2);
    color: var(--beaver2);
    margin: 1em;
  }
  // need to be replaced with Styled Component
  section {
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding: 0.4em;
  }
`;
