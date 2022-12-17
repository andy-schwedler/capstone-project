import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { BookmarkIcon } from "./BookmarkButton";

export default function Footer({ sampleEvents }) {
  return (
    <StyledFooterList>
      <StyledIconContainer>
        <Link href={"/"}>
          <Image
            aria-label="overview"
            alt="overview"
            src={"/assets/calendar.svg"}
            width={55}
            height={55}
          />
        </Link>
      </StyledIconContainer>
      <StyledIconContainer>
        <Link href={"/bookmarks"}>
          <BookmarkIcon
            aria-label="bookmark"
            alt="bookmark"
            color="blue"
            width={55}
            height={55}
          />
        </Link>
      </StyledIconContainer>
    </StyledFooterList>
  );
}

const StyledFooterList = styled.ul`
  list-style-type: none;
  width: 100vw;
  display: flex;
  margin: 0;
  justify-content: space-around;

  align-items: center;
`;

const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #245669;
  font-weight: bold;
  height: auto;
  margin-bottom: 2px;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;
