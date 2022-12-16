import styled from "styled-components";
import { StyledLink } from "./GlobalStyles";

export default function Header() {
  return (
    <StyledLink href={"/"}>
      <StyledHeader>
        <h1>Beaver Fit</h1>
        <p>🦫 dam strong 🦫</p>
      </StyledHeader>
    </StyledLink>
  );
}

export const StyledHeader = styled.header`
  width: 100vw;
  margin-top: 20px;
  text-align: center;
  color: #629fb5;

  h1,
  p {
    margin: 0;
  }
`;
