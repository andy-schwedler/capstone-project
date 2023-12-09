// import styled from "styled-components";

export default function DisplayMessage({ message }) {
  return <h1>{message}</h1>;
}

const StyledErrorMessage = styled.h1`
  font-size: 2rem;
  align-self: center;
`;
