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

export const StyledMain = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

export const StyledCardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  overflow: auto;
  padding: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  :link,
  :visited {
    color: inherit;
  }
`;

export const StyledLocationLink = styled(Link)`
  text-decoration: none;
  color: var(--beaver1);
`;

export const StyledButtonFrame = styled.button`
  background-color: transparent;
  border: none;
`;
