import Image from "next/image";
import { useState } from "react";

export default function BookmarkButton() {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }
  return (
    <>
      <button onClick={handleToggle}>
        <Image
          aria-label="bookmark"
          alt="bookmark"
          src="/public/assets/bookmark-filled.svg"
          width={20}
          height={20}
        />
      </button>
    </>
  );
}
