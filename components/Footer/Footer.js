import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooterList>
      <StyledIconContainer>
        <StyledButton>
          <Image
            width={40}
            height={40}
            src={"/assets/icons8-calendar-24.png"}
          />
        </StyledButton>
        <p>Schedule</p>
      </StyledIconContainer>
      <StyledIconContainer>
        <StyledButton>
          <Image
            width={40}
            height={40}
            alt="bookmark"
            src={"/assets/icons8-bookmark-outline.svg"}
          />
        </StyledButton>
        <p>bookmark</p>
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
  padding-left: 60px;
  padding-right: 60px;
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
  height: 65px;
  margin-bottom: 2px;

  img {
    width: 45px;
    height: 45px;
  }

  p {
    font-size: 0.8em;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: xx-large;
  padding: 0;
  margin: 0;
`;
