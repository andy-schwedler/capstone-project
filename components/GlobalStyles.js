import Image from "next/image";
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

export const StyledHeader = styled.header`
  width: 100vw;
  text-align: center;
  color: #629fb5;

  h1 {
    margin-bottom: 5px;
  }

  p {
    margin: 10px;
  }
`;

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
