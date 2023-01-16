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
  /* text-align: center;
  align-self: center; */
  color: var(--beaver);
`;

const StyledTextarea = styled.textarea`
  text-align: center;
  /* background-color: inherit;
  height: 10em;
  border: 0.1em solid darkgray;
  border-radius: 0.3em;
  caret-color: var(--beaver2);
  color: var(--beaver1); */

  /* 
  ::-webkit-input-placeholder {
    text-align: center;
  } */

  :focus {
    outline: var(--beaver4);
  }
`;

const StyledInput = styled.input`
  /* border: 0.1em solid darkgray;
  text-align: center;
  box-shadow: none;
  caret-color: var(--beaver2);
  color: var(--beaver1);
  margin: 1em;
  background-color: inherit;
  border-radius: 0.3em; */

  :focus {
    text-align: center;
    outline: none;
  }
`;
