import styled from "styled-components";
import { StyledLink } from "../GlobalStyles";
import { BookmarkIcon } from "../Icons/BookmarkIcon";
import ScheduleIcon from "../Icons/ScheduleIcon";
import { CreateIcon } from "../Icons/CreateIcon";
import Link from "next/link";

export default function Footer({ sampleEvents }) {
  const Badge = sampleEvents?.filter(
    (sampleEvent) => sampleEvent.isFavorite === true
  );
  const BadgeCount = Badge?.length === 0 ? "0" : Badge?.length;

  return (
    <StyledFooter>
      <StyledLink aria-label="overview page" href={"/"}>
        <ScheduleIcon
          aria-label="overview"
          alt="overview"
          fill="var(--beaver)"
          width={50}
          height={50}
        />
      </StyledLink>
      <StyledLink aria-label="create page" href={"/createpage"}>
        <CreateIcon
          alt="add button"
          color="var(--beaver)"
          width={50}
          height={50}
        />
      </StyledLink>
      <StyledWrapperLink aria-label="bookmark page" href={"/bookmarks"}>
        <BookmarkIcon
          aria-label="bookmark"
          alt="bookmark"
          fill="var(--beaver)"
          width={50}
          height={50}
        />
        <StyledButtonBadge>{BadgeCount}</StyledButtonBadge>
      </StyledWrapperLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--beaver1);
  padding: 0.9rem;
`;

const StyledButtonBadge = styled.div`
  position: relative;
  right: 1.85em;
  top: 0.8em;
  color: var(--beaver);
  pointer-events: none;
  min-width: 0.5em;
`;

const StyledWrapperLink = styled(Link)`
  grid-column: 3 / 4;
  width: auto;
  display: flex;
  text-decoration: none;

  :link,
  :visited {
    color: inherit;
  }
`;
