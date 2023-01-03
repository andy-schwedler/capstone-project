import BookmarkButton from "../BookmarkButton";
import { StyledLink } from "../GlobalStyles";
import { MoreOptionsButton } from "../Icons/MoreOptionsButton";
import { StyledEventContainer } from "./StyledEventContainer";

export default function MemoryOverviewCard({
  sampleEvent,
  onToggleFavorite,
  onDelete,
}) {
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
        <button onClick={() => onDelete(sampleEvent.id)}>X</button>
        {/* <MoreOptionsButton
          onDelete={onDelete}
          id={sampleEvent.id}
          width={15}
          fill={"white"}
        /> */}
      </StyledEventContainer>
    </>
  );
}
