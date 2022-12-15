import Image from "next/image";
import BookmarkFilled from "./assets/bookmark-filled.svg";

export default function BookmarkFilledIcon() {
  return (
    <Image width={30} height={30} alt="bookmark-filled" src={BookmarkFilled} />
  );
}
