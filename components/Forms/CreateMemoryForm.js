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
        <StyledCreateInput
          type="date"
          name="date"
          placeholder="DATE"
          min="2022-01-01"
          max="2023-12-31"
          pattern="\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*"
          required
        />
        <label htmlFor="isFavorite">favorite?</label>
        <input type="checkbox" name="isFavorite" />
        <label hidden htmlFor="title">
          your memory title
        </label>
        <input name="title" type="text" placeholder="Memory Title" required />
        <label hidden htmlFor="memory">
          your memory
        </label>
        <textarea
          name="memory"
          placeholder="details about your moment"
          required
        />
        <StyledButtonContainer>
          <StyledButtonFrame type="submit">create</StyledButtonFrame>
          <StyledButtonFrame type="reset">reset</StyledButtonFrame>
          <StyledButtonFrame onClick={onHandleIsCreating}>
            cancel
          </StyledButtonFrame>
        </StyledButtonContainer>
      </fieldset>
    </StyledCreateForm>
  );
}

const StyledCreateForm = styled.form`
  padding: 1.8em;
  display: grid;
  color: var(--beaver2);

  /* 
  grid-template-areas:
    "legend legend"
    "checkbox date"
    "title title"
    "textarea textarea"; */

  /* 
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


  */
`;
const StyledCreateFieldset = styled.fieldset`
  border: none;
  grid-column: 1 / 3;
  height: 40vh;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledCreateInput = styled.input``;
const StyledCreateInputDate = styled.input``;
const StyledCreateInputTextarea = styled.textarea``;
