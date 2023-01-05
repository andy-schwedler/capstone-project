import { StyledButtonFrame } from "./GlobalStyles";
import { BookmarkIcon } from "./Icons/BookmarkIcon";

export default function BookmarkButton({ id, isFavorite, onToggleFavorite }) {
  return (
    <>
      <StyledButtonFrame
        aria-label="bookmark"
        onClick={() => onToggleFavorite(id)}
      >
        {isFavorite ? (
          <BookmarkIcon alt="bookmark" fill="red" width={20} height={20} />
        ) : (
          <BookmarkIcon
            alt="bookmark"
            fill="var(--beaver)"
            width={20}
            height={20}
          />
        )}
      </StyledButtonFrame>
    </>
  );
}
