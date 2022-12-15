import { useState } from "react";
import { StyledButton } from "../Footer/Footer";
import BookmarkIcon from "./Bookmark";
import BookmarkFilledIcon from "./BookmarkFilled";

export default function BookmarkButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }
  return (
    <StyledButton onClick={toggleFavorite}>
      {isFavorite ? <BookmarkFilledIcon /> : <BookmarkIcon />}
    </StyledButton>
  );
}
