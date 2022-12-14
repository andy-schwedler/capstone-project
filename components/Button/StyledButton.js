import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: xx-large;
`;

export function Button({ children }) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}
