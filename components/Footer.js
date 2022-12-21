import styled from "styled-components";
import { BookmarkIcon, CreateIcon } from "./Icons";
import ScheduleIcon from "./Icons";
import { StyledButtonFrame, StyledLink } from "./GlobalStyles";

export default function Footer() {
  return (
    <StyledFooterList>
      <StyledLink href={"/"}>
        <ScheduleIcon
          aria-label="overview"
          alt="overview"
          fill="var(--beaver)"
          width={40}
          height={40}
        />
      </StyledLink>
      <StyledButtonFrame>
        <CreateIcon
          aria-label="add new memory"
          alt="add button"
          color="var(--beaver)"
          width={40}
          height={40}
        />
      </StyledButtonFrame>
      <StyledLink href={"/bookmarks"}>
        <BookmarkIcon
          aria-label="bookmark"
          alt="bookmark"
          color="var(--beaver)"
          width={40}
          height={40}
        />
      </StyledLink>
    </StyledFooterList>
  );
}

const StyledFooterList = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: var(--beaver1);
  list-style-type: none;
  margin: 0;
  padding: 1%;
  align-items: center;
`;
