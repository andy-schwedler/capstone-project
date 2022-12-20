import { StyledButtonFrame } from "./GlobalStyles";
import { BookmarkIcon } from "./Icons";

export default function BookmarkButton({ id, isFavorite, onToggleFavorite }) {
  return (
    <>
      <StyledButtonFrame onClick={() => onToggleFavorite(id)}>
        {isFavorite ? (
          <BookmarkIcon
            aria-label="bookmark"
            alt="bookmark"
            fill="red"
            width={20}
            height={20}
          />
        ) : (
          <BookmarkIcon
            aria-label="bookmark"
            alt="bookmark"
            fill="white"
            width={20}
            height={20}
          />
        )}
      </StyledButtonFrame>
    </>
  );
}
