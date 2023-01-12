import styled from "styled-components";

export default function InputAndLabelDatePair({
  name,
  type,
  defaultValue,
  placeholder,
  label,
}) {
  return (
    <>
      {type === "checkbox" && (
        <>
          <StyledLabel htmlFor={name}>{label}</StyledLabel>
          <StyledInput
            type="checkbox"
            name={name}
            aria-label={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
          />
        </>
      )}
      {type === "date" && (
        <>
          <StyledLabel htmlFor={label}>{label}</StyledLabel>
          <StyledInput
            min="2022-01-01"
            max="2023-12-31"
            pattern="\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*"
            required
            type="date"
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
`;

const StyledInput = styled.input`
  align-self: center;
  border: none;
  border-bottom: 0.1em solid whitesmoke;
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
