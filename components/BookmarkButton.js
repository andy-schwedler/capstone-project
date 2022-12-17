import { StyledButtonFrame } from "./GlobalStyles";

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

export function BookmarkIcon({ color, width, height }) {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M17,4v14.967l-4.212-1.805L12,16.824l-0.788,0.338L7,18.967V4H17 M17,2H7C5.9,2,5,2.9,5,4v18l7-3l7,3V4C19,2.9,18.1,2,17,2 L17,2z" />
    </svg>
  );
}
