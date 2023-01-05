import { StyledButtonFrame, StyledLink } from "../GlobalStyles";
import { BookmarkIcon } from "../Icons/BookmarkIcon";
import ScheduleIcon from "../Icons/ScheduleIcon";
import { CreateIcon } from "../Icons/CreateIcon";
import { StyledFooterList } from "./StyledFooterList";
import styled from "styled-components";

export default function Footer({ sampleEvents, onHandleIsCreating }) {
  const Badge = sampleEvents?.filter(
    (sampleEvent) => sampleEvent.isFavorite === true
  );

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
      <StyledButtonFrame onClick={onHandleIsCreating}>
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
          fill="var(--beaver)"
          width={40}
          height={40}
        />
      </StyledLink>
      <StyledButtonBadge>
        {Badge?.length === 0 ? null : Badge?.length}
      </StyledButtonBadge>
    </StyledFooterList>
  );
}

const StyledButtonBadge = styled.div`
  color: var(--beaver);
  padding: 0.1em;
  position: absolute;
  right: 8.3rem;
  bottom: 1.5rem;
  border-radius: 0.5em;
  pointer-events: none;
`;
