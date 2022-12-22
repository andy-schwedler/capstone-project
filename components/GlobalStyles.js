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
  grid-template-rows: auto 2fr auto;
`;

// second row grid
export const StyledCardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow: scroll;
  color: var(--beaver3);

  article {
    align-self: center;
    width: 50%;
    background-color: var(--beaver);
    border-radius: 20px;
    /* box-shadow: 5px 6px 22px 4px #245669; */
    padding: 15px;
  }

  h3,
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0px;
    margin-top: 5px;
  }

  h3 {
    color: white;
  }

  button {
    float: right;
  }

  p {
    font-size: x-small;
    font-style: italic;
  }
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
