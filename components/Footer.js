import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooterList>
      <StyledIconContainer>
        <StyledButton>
          <p>Overview</p>
        </StyledButton>
      </StyledIconContainer>
      <StyledIconContainer>
        <StyledButton>
          <p>Bookmarks</p>
        </StyledButton>
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
  font-size: x-large;
  padding: 0;
  margin: 0;
`;
