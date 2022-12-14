import styled from "styled-components";
import { StyledButton } from "../Button/StyledButton";

export default function Footer() {
  return (
    <>
      <StyledFooterList>
        <StyledButton>🗓️</StyledButton>
        <StyledButton>❤️</StyledButton>
      </StyledFooterList>
    </>
  );
}

export const StyledFooterList = styled.ul`
  list-style-type: none;
  width: 100vw;
  display: flex;
  margin: 0;
  position: fixed;
  bottom: 0;
  background-color: white;
  height: 8vh;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  align-items: center;
`;
