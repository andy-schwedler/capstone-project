import BookmarkButton from "../BookmarkButton";
import { StyledLink } from "../GlobalStyles";
import { MoreOptionsButton } from "../Icons/MoreOptionsButton";
import { StyledEventContainer } from "./StyledEventContainer";

export default function MemoryOverviewCard({ sampleEvent, onToggleFavorite }) {
  return (
    <>
      <StyledEventContainer>
        <BookmarkButton
          isFavorite={sampleEvent.isFavorite}
          id={sampleEvent.id}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledLink href={`/${sampleEvent.id}`}>
          <h3>{sampleEvent.name}</h3>
        </StyledLink>
        <p>{sampleEvent.date}</p>
        {/* <span>tags tags tags</span> */}
        <MoreOptionsButton width={15} fill={"white"} />
      </StyledEventContainer>
    </>
  );
}
