import Image from "next/image";
import { StyledButtonFrame } from "./GlobalStyles";

export default function BookmarkButton({ isActive, onToggle }) {
  return (
    <>
      <StyledButtonFrame onClick={onToggle}>
        {isActive ? (
          <Image
            aria-label="bookmark"
            alt="bookmark"
            src={"/assets/bookmark-filled.svg"}
            width={20}
            height={20}
          />
        ) : (
          <Image
            aria-label="bookmark"
            alt="bookmark"
            src={"/assets/bookmark-outline.svg"}
            width={20}
            height={20}
          />
        )}
      </StyledButtonFrame>
    </>
  );
}
