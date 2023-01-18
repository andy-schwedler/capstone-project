import React from "react";
import styled from "styled-components";
import { StyledWrapper } from "./Forms/CreateMemoryForm";
import InputAndLabel from "./Forms/Input/InputAndLabel";

export default function SearchBar({ onSearch }) {
  return (
    <StyledSearchBar>
      <StyledWrapper>
        <InputAndLabel
          onSearch={onSearch}
          type="text"
          name="search"
          placeholder={"search"}
        />
      </StyledWrapper>
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.section`
  align-self: flex-start;
  margin: 1em;
`;
