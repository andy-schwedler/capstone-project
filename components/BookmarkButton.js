import { StyledButtonFrame } from "./GlobalStyles";
import { BookmarkIcon } from "./Icons/BookmarkIcon";

export default function BookmarkButton({ id, isFavorite, onToggleFavorite }) {
  return (
    <>
      <StyledButtonFrame onClick={() => onToggleFavorite(id)}>
        {isFavorite ? (
          <BookmarkIcon
            aria-label="bookmark"
            alt="bookmark"
            color="red"
            width={20}
            height={20}
          />
        ) : (
          <BookmarkIcon
            aria-label="bookmark"
            alt="bookmark"
            color="white"
            width={20}
            height={20}
          />
        )}
      </StyledButtonFrame>
    </>
  );
}
