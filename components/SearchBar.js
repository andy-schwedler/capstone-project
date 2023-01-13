import React from "react";
import styled from "styled-components";
import InputAndLabelTextPair from "./Forms/Input/InputAndLabelTextPair";

export default function SearchBar({ onSearch }) {
  return (
    <StyledSearchBar>
      <InputAndLabelTextPair
        onSearch={onSearch}
        type="text"
        name="search"
        placeholder={"search"}
      />
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.section`
  align-self: flex-start;
`;
