import styled from "styled-components";

export default function DisplayMessage({ message }) {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
}

const StyledErrorMessage = styled.h1`
  font-size: 2rem;
  align-self: center;
`;
