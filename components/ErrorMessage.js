import styled from "styled-components";

export default function ErrorMessage({ message }) {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
}

const StyledErrorMessage = styled.h1`
  font-style: italic;
  font-weight: 100;
  font-size: 0.9rem;
  align-self: center;
`;
