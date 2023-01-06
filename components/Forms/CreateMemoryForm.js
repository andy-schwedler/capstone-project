import React from "react";
import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";

export default function CreateMemoryForm({
  onAddCreateCard,
  onHandleIsCreating,
}) {
  return (
    <StyledCreateForm onSubmit={onAddCreateCard}>
      <fieldset>
        <legend>Create a new 🦫 memory</legend>
        <label hidden htmlFor="date">
          date
        </label>
        <input
          type="date"
          name="date"
          min="2022-01-01"
          max="2023-12-31"
          pattern="\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*"
          required
        />
        <label htmlFor="isFavorite">favorite?</label>
        <input type="checkbox" name="isFavorite" />
        <label hidden htmlFor="memory">
          your memory
        </label>
        <textarea placeholder="your favorite moment" name="memory" required />
        <div>
          <StyledButtonFrame type="submit">create</StyledButtonFrame>
          <StyledButtonFrame type="reset">reset</StyledButtonFrame>
          <StyledButtonFrame onClick={onHandleIsCreating}>
            cancel
          </StyledButtonFrame>
        </div>
      </fieldset>
    </StyledCreateForm>
  );
}

const StyledCreateForm = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
    border-color: transparent;
  }

  legend {
    margin-bottom: 10px;
  }

  label {
    font-size: small;
    align-self: center;
  }

  textarea,
  input {
    grid-area: input;
    height: 2rem;
    border: 1px solid var(--beaver2);
    border-radius: 5px;
    color: var(--beaver2);
    margin: 10px;

    :focus {
      outline-color: var(--beaver2);
      caret-color: var(--beaver2);
    }
    :checked {
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-align: start;
    margin-top: 5px;
    justify-content: space-between;
  }
`;
