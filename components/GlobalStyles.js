import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    * {
        box-sizing: border-box;
    }

:root{
  --beaver: #245669;
  --beaver1: #629FB5;
  --beaver2: #694C2E;
  --beaver3: #FFD3A3;
}

`;

export default GlobalStyles;

export const StyledMainGrid = styled.div`
  display: grid;
  height: 100vh;
  align-self: center;
  grid-template-rows: auto 2fr auto;
`;

export const StyledScrollSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  overflow: auto;
  padding: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  h3 {
    margin: 0, 0, 10, 0;
  }

  :link,
  :visited {
    color: inherit;
  }
`;

export const StyledButtonFrame = styled.button`
  display: flex;
  color: inherit;
  background-color: transparent;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;
