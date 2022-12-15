import Image from "next/image";
import Bookmark from "./assets/bookmark-outline.svg";

export default function BookmarkIcon() {
  return <Image width={30} height={30} alt="bookmark" src={Bookmark} />;
}
