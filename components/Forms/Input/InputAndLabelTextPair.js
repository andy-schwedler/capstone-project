import styled from "styled-components";

export default function InputAndLabelTextPair({
  name,
  type,
  rows,
  cols,
  defaultValue,
  placeholder,
  onSearch,
  onChange,
  maxLength,
}) {
  return (
    <>
      {type === "text" && (
        <>
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
        </>
      )}
      {type === "textarea" && (
        <>
          <StyledLabel htmlFor={name}>{name}</StyledLabel>
          <StyledTextarea
            rows={rows}
            cols={cols}
            type="textarea"
            name={name}
            maxLength={maxLength}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={() => onChange(event)}
            required
          />
        </>
      )}
      {type === "text-not-required" && (
        <>
          <StyledLabel htmlFor={name}>{name}</StyledLabel>
          <StyledInput
            type="text"
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        </>
      )}
    </>
  );
}

const StyledLabel = styled.label`
  align-self: fle;
  color: var(--beaver);
  padding-bottom: 0.4em;
`;

const StyledTextarea = styled.textarea`
  text-align: center;
  min-width: 15rem;

  // allows beavers to adjust height only
  resize: vertical;
  background-color: inherit;
  height: 10em;
  border: 0.1em solid darkgray;
  border-radius: 0.3em;

  color: var(--beaver2);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  caret-color: var(--beaver2);

  ::-webkit-input-placeholder {
    text-align: center;
  }

  :focus {
    outline: var(--beaver4);
    text-align: center;
  }
`;

const StyledInput = styled.input`
  width: 15rem;
  margin: 0;
  border: 0.1em solid darkgray;
  text-align: center;
  box-shadow: none;
  caret-color: var(--beaver2);
  color: var(--beaver2);
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
`;
