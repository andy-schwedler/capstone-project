import styled from "styled-components";

export default function InputAndLabelTextPair({
  name,
  type,
  rows,
  cols,
  defaultValue,
  placeholder,
  onFilter,
}) {
  return (
    <StyledPairFrame>
      {type === "text" && (
        <>
          <StyledLabel htmlFor={name}>{name}</StyledLabel>
          <StyledInput
            type="text"
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onFilter}
            required
          />
        </>
      )}
      {type === "textarea" && (
        <>
          <StyledLabel htmlFor={name}>{name}</StyledLabel>
          <StyledInput
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
    </StyledPairFrame>
  );
}

const StyledPairFrame = styled.div`
  display: flex;
`;

const StyledLabel = styled.label`
  font-size: 1em;
  text-align: center;
  align-self: center;
  color: inherit;
`;

const StyledInput = styled.input`
  align-self: center;
  border: none;
  border-bottom: 0.1em solid darkgray;
  text-align: center;

  height: 2rem;
  caret-color: var(--beaver2);
  color: var(--beaver1);
  margin: 1em;

  :focus {
    outline: transparent;
    text-align: center;
  }

  :placeholder-shown {
    text-align: center;
  }
`;
