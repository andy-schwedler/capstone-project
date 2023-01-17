import styled from "styled-components";
import { StyledLink } from "../GlobalStyles";
import { BookmarkIcon } from "../Icons/BookmarkIcon";
import { CreateIcon } from "../Icons/CreateIcon";
import Link from "next/link";
import BookOutline from "../Icons/BookOutline";

export default function Footer({ sampleEvents }) {
  const Badge = sampleEvents?.filter(
    (sampleEvent) => sampleEvent.isFavorite === true
  );
  const BadgeCount = Badge?.length === 0 ? "0" : Badge?.length;

  return (
    <StyledFooter>
      <StyledLink aria-label="overview page" href={"/"}>
        <BookOutline
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
          fill="var(--beaver)"
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
  position: sticky;
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
  width: auto;
  display: flex;
  text-decoration: none;

  :link,
  :visited {
    color: inherit;
  }
`;
