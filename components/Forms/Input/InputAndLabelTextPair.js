import styled from "styled-components";

export default function InputAndLabelTextPair({
  name,
  type,
  rows,
  cols,
  defaultValue,
  placeholder,
  onSearch,
}) {
  return (
    <>
      {type === "text" && (
        <>
          <StyledLabel htmlFor={name}>{name}</StyledLabel>
          <StyledInput
            type="text"
            name={name}
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
            placeholder={placeholder}
            defaultValue={defaultValue}
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
  font-size: 1em;
  text-align: center;
  align-self: center;
  color: inherit;
`;

const StyledTextarea = styled.textarea`
  border: none;
  border-bottom: 0.1em solid darkgray;

  ::-webkit-input-placeholder {
    text-align: center;
  }

  :focus {
    outline: none;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 0.1em solid darkgray;
  text-align: center;
  box-shadow: none;
  caret-color: var(--beaver2);
  color: var(--beaver1);
  margin: 1em;

  :focus {
    outline: transparent;
    text-align: center;
  }
`;
