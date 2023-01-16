import { useState } from "react";
import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";
import { StyledButtonFrame } from "../GlobalStyles";
import InputAndLabelTextPair from "./Input/InputAndLabelTextPair";

export default function CreateMemoryForm({ onAddCreateCard }) {
  const [counter, setCounter] = useState();

  const maxLengthTextarea = 200;

  function handleCounter(event) {
    setCounter(event.target.value.length);
  }

  return (
    <StyledCreateForm aria-label="create card form" onSubmit={onAddCreateCard}>
      <StyledFieldset aria-label="insert your memories here">
        <StyledWrapper>
          <InputAndLabelTextPair
            placeholder="Title"
            type="text"
            name="headline"
          />
        </StyledWrapper>
        <StyledWrapper>
          <InputAndLabelTextPair
            type="textarea"
            name="details"
            placeholder="...tell me more"
            onChange={handleCounter}
            maxLength={maxLengthTextarea}
          />
          {counter ? counter : "0"}/{maxLengthTextarea}
        </StyledWrapper>
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
  width: 90vw;
  align-self: center;
  align-items: center;
  padding: 3rem;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: none;
  color: var(--beaver1);
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.1em;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.6em;
`;
