import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { StyledButtonFrame } from "../GlobalStyles";
import InputAndLabel from "./Input/InputAndLabel";

export default function CreateMemoryForm({ onAddCreateCard, image, onImage }) {
  const [counter, setCounter] = useState(0);

  const maxLengthTextarea = 200;

  function handleCounter(event) {
    setCounter(event.target.value.length);
  }

  function handleSubmit(event) {
    onAddCreateCard(event);
    event.target.reset();
    event.target.headline.focus();
    setCounter(0);
  }

  return (
    <StyledCreateForm aria-label="create card form" onSubmit={handleSubmit}>
      <StyledFieldset aria-label="insert your memories here">
        <InputAndLabel placeholder="Title" type="text" name="headline" />
        <StyledWrapper>
          <label htmlFor="upload">Upload 📸 here</label>
          <StyledFileUpload
            id="upload"
            accept="image/*"
            name="upload button"
            aria-label="upload button"
            type="file"
            onChange={(event) => onImage(event)}
          />
        </StyledWrapper>
        <InputAndLabel name="bookmark" label="bookmark" type="checkbox" />
        <StyledWrapper>
          <InputAndLabel
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
        <StyledButtonWrapper>
          <StyledFormSubmitButton aria-label="submit form" type="submit">
            create
          </StyledFormSubmitButton>
          <StyledFormResetButton
            aria-label="reset form"
            type="reset"
            onClick={() => setCounter(0)}
          >
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
`;

const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1.3em;
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
`;

const StyledCounterContainer = styled.div`
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
