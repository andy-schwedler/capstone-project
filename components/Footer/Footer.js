import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <StyledFooterList>
        <li>Schedule-icon</li>
        <li>Bookmarks-icon</li>
      </StyledFooterList>
    </>
  );
}

export const StyledFooterList = styled.ul`
  list-style-type: none;
  width: 100vw;
  display: flex;
  margin: 0;
  margin-top: 30px;
  position: fixed;
  bottom: 0;
  background-color: white;
  height: 8vh;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  align-items: center;
`;
