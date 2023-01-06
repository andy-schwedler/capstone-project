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
  --beaver: #245669; // blue sapphire
  --beaver1: #629FB5; // maximum blue
  --beaver2: #694C2E; //darkbrown
  --beaver3: #FFD3A3; // beige
  --beaver4: #F6B8A2; // Elgins tipp not in use currently
}

`;

export default GlobalStyles;

export const StyledGridWrapper = styled.div`
  display: grid;
  height: 100vh;
  align-self: center;
  grid-template-rows: auto 2fr auto;
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

export const StyledForm = styled.form`
  grid-column: 1 / 6;
  grid-row: 1 / 1;
  padding: 0.5em;

  input {
    border-radius: 0.5rem;
    height: 2rem;
    caret-color: var(--beaver2);
    color: var(--beaver2);
    margin: 1em;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding: 0.4em;
  }
`;
