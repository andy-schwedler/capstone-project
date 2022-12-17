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
  --biber-blue-color: #245669;
}


`;

export default GlobalStyles;

export const StyledMain = styled.main`
  height: 82vh;
  overflow: scroll;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledButtonFrame = styled.button`
  background-color: transparent;
  border: none;
`;
