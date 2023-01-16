import React from "react";
import styled from "styled-components";
import { StyledWrapper } from "./Forms/CreateMemoryForm";
import InputAndLabelTextPair from "./Forms/Input/InputAndLabelTextPair";

export default function SearchBar({ onSearch }) {
  return (
    <StyledSearchBar>
      <StyledWrapper>
        <InputAndLabelTextPair
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
