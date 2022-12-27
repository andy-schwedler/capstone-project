import { StyledButtonFrame, StyledLink } from "../GlobalStyles";
import { BookmarkIcon } from "../Icons/BookmarkIcon";
import ScheduleIcon from "../Icons/ScheduleIcon";
import { CreateIcon } from "../Icons/CreateIcon";
import { StyledFooterList } from "./StyledFooterList";

export default function Footer({ onHandleIsCreating }) {
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
          color="var(--beaver)"
          width={40}
          height={40}
        />
      </StyledLink>
    </StyledFooterList>
  );
}
