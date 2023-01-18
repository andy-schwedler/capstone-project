import { useState } from "react";
import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import InputAndLabelTextPair from "./Input/InputAndLabelTextPair";

import InputAndLabelDateCheck from "./Input/InputAndLabelDateCheck";

export default function CreateMemoryForm({ onAddCreateCard, onImage }) {
  const [counter, setCounter] = useState();

  const maxLengthTextarea = 200;

  function handleCounter(event) {
    if (!event.target.value) {
      setCounter(0);
    }

    setCounter(event.target.value.length);
  }

  return (
    <StyledCreateForm
      aria-label="create card form"
      onSubmit={() => {
        onAddCreateCard;
        setCounter(0);
      }}
    >
      <StyledFieldset aria-label="insert your memories here">
        <StyledWrapper>
          <InputAndLabelTextPair
            placeholder="Title"
            type="text"
            name="headline"
          />
        </StyledWrapper>
        <StyledWrapper>
          <label htmlFor="upload">Upload 📸 here</label>
          <StyledFileUpload
            id="upload"
            accept="image/png"
            name="upload button"
            aria-label="upload button"
            type="file"
            onChange={(event) => onImage(event)}
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
          <StyledCounterContainer>
            {counter ? counter : "0"}/{maxLengthTextarea}
          </StyledCounterContainer>
          <InputAndLabelDateCheck
            name="bookmark"
            label="bookmark"
            type="checkbox"
          />
        </StyledWrapper>
        <StyledButtonWrapper>
          <StyledFormSubmitButton aria-label="submit form" type="submit">
            create
          </StyledFormSubmitButton>
          <StyledFormResetButton aria-label="reset form" type="reset">
            reset
          </StyledFormResetButton>
        </StyledButtonWrapper>
      </StyledFieldset>
    </StyledCreateForm>
  );
}

export const StyledCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3em;
`;

const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  align-items: center;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--beaver);
  width: 100%;
`;

const StyledCounterContainer = styled.p`
  align-self: flex-end;
  margin: 0;
  color: var(--beaver1);
  font-size: small;
`;

const StyledFileUpload = styled.input`
  border: none;

  ::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

const StyledFormSubmitButton = styled(StyledButtonFrame)`
  background-color: var(--beaver);
  color: white;
  width: 5em;
  height: 2em;
  border-radius: 0.6em;
`;

const StyledFormResetButton = styled(StyledButtonFrame)`
  background-color: var(--beaver3);
  color: var(--beaver2);
  width: 5em;
  height: 2em;
  border-radius: 0.6em;
`;
