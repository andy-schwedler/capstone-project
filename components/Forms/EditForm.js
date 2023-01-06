import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";

export default function EditForm({ onToggle, onEditSubmit, sampleEvent }) {
  return (
    <StyledForm onSubmit={onEditSubmit}>
      <label hidden>date</label>
      <input name="date" type="date" defaultValue={sampleEvent.date} required />
      <label hidden>text</label>
      <input
        name="memory"
        type="text"
        defaultValue={sampleEvent.name}
        required
      />
      <div>
        <StyledButtonFrame type="submit">OK</StyledButtonFrame>
        <StyledButtonFrame onClick={onToggle} type="button">
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
