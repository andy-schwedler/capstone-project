import Image from "next/image";
import { useState } from "react";
import { StyledButtonFrame } from "./GlobalStyles";

export default function BookmarkButton() {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }

  return (
    <>
      <StyledButtonFrame onClick={handleToggle}>
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
