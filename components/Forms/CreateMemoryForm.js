import { useState } from "react";
import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import { BookmarkIcon } from "../Icons/BookmarkIcon";
import InputAndLabelTextPair from "./Input/InputAndLabelTextPair";

export default function CreateMemoryForm({
  onAddCreateCard,
  imageValue,
  image,
  onImage,
}) {
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
        <BookmarkIcon width={"40"} />
        <StyledWrapper>
          <InputAndLabelTextPair
            type="textarea"
            name="details"
            placeholder="...tell me more"
            onChange={handleCounter}
            maxLength={maxLengthTextarea}
          />
          <StyledCounterContainer>
            {counter ? counter : "0"}/{maxLengthTextarea}
          </StyledCounterContainer>
        </StyledWrapper>
        <input
          type="file"
          // value={imageValue}
          onChange={(event) => onImage(event)}
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
  align-self: center;
  align-items: center;
  padding: 0.8rem;
  margin-top: 5em;
`;

const StyledFieldset = styled.fieldset`
  height: 80vh;
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
  font-size: 0.8em;
`;

const StyledCounterContainer = styled.p`
  align-self: flex-end;
  margin: 0;
`;
