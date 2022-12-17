import styled from "styled-components";
import { StyledLink } from "./GlobalStyles";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLink href={"/"}>
        <h1>Beaver Fit</h1>
        <p>🦫 dam strong 🦫</p>
      </StyledLink>
    </StyledHeader>
  );
}

export const StyledHeader = styled.header`
  width: 100vw;
  margin-top: 10px;
  text-align: center;

  h1,
  p {
    color: #629fb5;
    margin: 0;
  }
`;
