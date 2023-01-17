import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #EFEFEF;
    }

    * {
        box-sizing: border-box;
    }

:root{
  --beaver: #245669; // blue sapphire
  --beaver1: #629FB5; // maximum blue
  --beaver2: #694C2E; //darkbrown
  --beaver3: #FFD3A3; // beige
  --beaver4: #F6B8A2; // Elgins tipp not in use currently
}

`;

export default GlobalStyles;

export const StyledMain = styled.main`
  align-self: center;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

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
