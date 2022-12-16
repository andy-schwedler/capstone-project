import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooterList>
      <StyledIconContainer>
        <Image
          aria-label="overview"
          alt="overview"
          src={"/assets/calendar.svg"}
          width={20}
          height={20}
        />
      </StyledIconContainer>
      <StyledIconContainer>
        <Image
          aria-label="bookmark"
          alt="bookmark"
          src={"/assets/bookmark-filled.svg"}
          width={20}
          height={20}
        />
      </StyledIconContainer>
    </StyledFooterList>
  );
}

const StyledFooterList = styled.ul`
  list-style-type: none;
  width: 100vw;
  display: flex;
  margin: 0;
  position: fixed;
  bottom: 0;
  background-color: white;
  height: 8vh;
  justify-content: space-around;
  padding-left: 30%;
  padding-right: 30%;
  align-items: center;
`;

const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #245669;
  font-weight: bold;
  width: 65px;
  height: auto;
  margin-bottom: 2px;

  p {
    font-size: 0.4em;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;
