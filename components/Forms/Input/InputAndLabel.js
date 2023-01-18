import styled from "styled-components";

export default function InputAndLabel({
  name,
  type,
  defaultValue,
  placeholder,
  onSearch,
  onChange,
  maxLength,
  label,
  callbackfn,
}) {
  return (
    <>
      {type === "text" && (
        <StyledWrapper>
          <StyledLabel htmlFor={name}>{name}</StyledLabel>
          <StyledInput
            type="text"
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
            type="text"
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        </StyledWrapper>
      )}
      {type === "checkbox" && (
        <StyledWrapper>
          <StyledLabel htmlFor={name}>{label}</StyledLabel>
          <StyledCheckbox
            type="checkbox"
            name={name}
            aria-label={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
          />
        </StyledWrapper>
      )}
      {type === "file" && (
        <StyledWrapper>
          <StyledLabel htmlFor="upload">Upload 📸 here</StyledLabel>
          <StyledFileUpload
            id="upload"
            accept="image/png"
            name="upload button"
            aria-label="upload button"
            type="file"
            callbackfn={callbackfn}
          />
        </StyledWrapper>
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

  color: var(--beaver1);
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
  color: var(--beaver1);
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
`;

const StyledFileUpload = styled.input`
  border: none;

  ::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--beaver);
`;
