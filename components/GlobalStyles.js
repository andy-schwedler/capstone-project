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
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 80vh;
  overflow: scroll;
`;

export const StyledCardSection = styled.section`
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow: scroll;
  color: white;

  :first-child {
    padding-top: 30px;
  }
  :last-child {
    padding-bottom: 40px;
  }

  article {
    background-color: #245669;
    border-radius: 20px;
    width: 70vw;
    /* box-shadow: 5px 6px 22px 4px #245669; */
    padding: 15px;
  }

  h3 {
    font-size: 1.1rem;
    color: white;
    list-style-type: none;
    margin: 0px;
  }

  button {
    color: #ffd3a3;
    float: right;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledButtonFrame = styled.button`
  background-color: transparent;
  border: none;
`;
