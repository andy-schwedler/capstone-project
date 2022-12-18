import Link from "next/link";
import styled from "styled-components";
import { BookmarkIcon } from "./BookmarkButton";
import ScheduleIcon from "./Icons";

export default function Footer() {
  return (
    <StyledFooterList>
      <StyledIconContainer>
        <Link href={"/"}>
          <ScheduleIcon
            aria-label="overview"
            alt="overview"
            fill="var(--biber-blue-color)"
            width={40}
            height={40}
          />
        </Link>
      </StyledIconContainer>
      <StyledIconContainer>
        <Link href={"/bookmarks"}>
          <BookmarkIcon
            aria-label="bookmark"
            alt="bookmark"
            color="#245669"
            width={40}
            height={40}
          />
        </Link>
      </StyledIconContainer>
    </StyledFooterList>
  );
}

const StyledFooterList = styled.footer`
  list-style-type: none;
  background-color: lightblue;
  width: 100vw;
  display: flex;
  margin: 0;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
`;

const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #245669;
  font-weight: bold;
  height: auto;
  margin-bottom: 2px;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;
