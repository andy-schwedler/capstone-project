import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Beaver Fit</h1>
      <p>🦫 dam strong 🦫</p>
    </StyledHeader>
  );
}

export const StyledHeader = styled.header`
  width: 100vw;
  text-align: center;
  color: #629fb5;

  h1 {
    margin-bottom: 5px;
  }

  p {
    margin: 10px;
  }
`;
