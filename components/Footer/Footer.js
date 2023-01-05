import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledButtonFrame, StyledLink } from "../GlobalStyles";
import { BookmarkIcon } from "../Icons/BookmarkIcon";
import ScheduleIcon from "../Icons/ScheduleIcon";
import { CreateIcon } from "../Icons/CreateIcon";
import { StyledFooterList } from "./StyledFooterList";
import Link from "next/link";

export default function Footer({ sampleEvents, onHandleIsCreating }) {
  const Badge = sampleEvents?.filter(
    (sampleEvent) => sampleEvent.isFavorite === true
  );
  const BadgeCount = Badge?.length === 0 ? "0" : Badge?.length;

  return (
    <StyledFooterList>
      <StyledLink href={"/"}>
        <ScheduleIcon
          aria-label="overview"
          alt="overview"
          fill="var(--beaver)"
          width={50}
          height={50}
        />
      </StyledLink>
      <StyledButtonFrame onClick={onHandleIsCreating}>
        <CreateIcon
          aria-label="add new memory"
          alt="add button"
          color="var(--beaver)"
          width={50}
          height={50}
        />
      </StyledButtonFrame>
      <StyledLinkWrapper href={"/bookmarks"}>
        <BookmarkIcon
          aria-label="bookmark"
          alt="bookmark"
          fill="var(--beaver)"
          width={50}
          height={50}
        />
        <StyledButtonBadge>{BadgeCount}</StyledButtonBadge>
      </StyledLinkWrapper>
    </StyledFooterList>
  );
}

const StyledButtonBadge = styled.div`
  position: relative;
  right: 1.85em;
  top: 0.8em;
  color: var(--beaver);
  pointer-events: none;
  min-width: 0.5em;
`;

const StyledLinkWrapper = styled(Link)`
  grid-column: 3 / 4;
  width: auto;
  display: flex;
  text-decoration: none;

  :link,
  :visited {
    color: inherit;
  }
`;
