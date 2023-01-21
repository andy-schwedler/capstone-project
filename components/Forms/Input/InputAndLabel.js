import { useState } from "react";
import styled from "styled-components";
import { BookmarkIcon } from "../../Icons/BookmarkIcon";

export default function InputAndLabel({
  name,
  type,
  defaultValue,
  placeholder,
  onSearch,
  onChange,
  maxLength,
  label,
}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      {type === "text" && (
        <StyledWrapper>
          <StyledLabel htmlFor={name}>{name}</StyledLabel>
          <StyledInput
            type="text"
            id={name}
            name={name}
            maxLength={maxLength}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onSearch}
            required
          />
        </StyledWrapper>
      )}
      {type === "textarea" && (
        <StyledWrapper>
          <StyledLabel htmlFor={name}>{name}</StyledLabel>
          <StyledTextarea
            type="textarea"
            id={name}
            name={name}
            maxLength={maxLength}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={() => onChange(event)}
            required
          />
        </StyledWrapper>
      )}
      {type === "text-not-required" && (
        <StyledWrapper>
          <StyledLabel htmlFor={name}>{name}</StyledLabel>
          <StyledInput
            id={name}
            type="text"
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        </StyledWrapper>
      )}
      {type === "checkbox" && (
        <StyledCheckboxWrapper>
          <StyledLabel onClick={() => setIsChecked(!isChecked)} htmlFor={name}>
            {label}
          </StyledLabel>
          <StyledCheckbox
            type="checkbox"
            id={name}
            name={name}
            aria-label={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
          />
          {isChecked ? (
            <BookmarkIcon width="20" fill="red" />
          ) : (
            <BookmarkIcon width="20" fill="var(--beaver)" />
          )}
        </StyledCheckboxWrapper>
      )}
    </>
  );
}

const StyledLabel = styled.label`
  color: var(--beaver1);
  padding-bottom: 0.3em;
  font-size: 0.8em;
`;

const StyledTextarea = styled.textarea`
  text-align: center;
  min-width: 15rem;
  min-height: 10rem;
  max-height: 12rem;

  // allows beavers to adjust height only
  resize: vertical;

  background-color: inherit;
  height: 10em;
  border: 0.1em solid darkgray;
  border-radius: 0.3em;

  color: var(--beaver);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  caret-color: var(--beaver);

  ::-webkit-input-placeholder {
    text-align: center;
  }

  ::selection {
    background-color: var(--beaver3);
  }

  :focus {
    outline: none;
    text-align: center;
  }
`;

const StyledInput = styled.input`
  margin: 0;
  border: 0.1em solid darkgray;
  text-align: center;
  box-shadow: none;
  caret-color: var(--beaver2);
  color: var(--beaver);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  background-color: inherit;
  border-radius: 0.3em;

  :focus {
    text-align: center;
    outline: none;
  }

  ::-webkit-input-placeholder {
    text-align: center;
  }

  ::selection {
    background-color: var(--beaver3);
  }
`;

const StyledCheckbox = styled.input`
  margin: 0;
  align-self: center;
  border: none;
  display: none;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--beaver);
`;
const StyledCheckboxWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--beaver);
`;
