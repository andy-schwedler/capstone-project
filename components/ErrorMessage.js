import styled from "styled-components";

export default function ErrorMessage({ message }) {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
}

const StyledErrorMessage = styled.h1`
  font-weight: 100;
  font-size: 2rem;
  align-self: center;
`;
