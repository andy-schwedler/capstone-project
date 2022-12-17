import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    * {
        box-sizing: border-box;
    }

`;

export default GlobalStyles;

export const StyledMain = styled.main`
  height: 80vh;
  overflow: scroll;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const StyledButtonFrame = styled.button`
  background-color: transparent;
  border: none;
`;
