import { StyledLink } from "../GlobalStyles";
import { StyledHeader } from "./StyledHeader";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLink aria-label="overview page" href={"/"}>
        <h1>Beaver 💭 memories</h1>
        <p>🦫 dam strong 🦫</p>
      </StyledLink>
    </StyledHeader>
  );
}
