import React from "react";
import Footer from "../../components/Footer/Footer";
import CreateMemoryForm from "../../components/Forms/CreateMemoryForm";
import { StyledGridWrapper, StyledMain } from "../../components/GlobalStyles";
import Header from "../../components/Header/Header";

export default function CreatePage({ sampleEvents }) {
  return (
    <>
      <StyledGridWrapper>
        <Header />
        <StyledMain>
          <CreateMemoryForm />
        </StyledMain>
        <Footer sampleEvents={sampleEvents} />
      </StyledGridWrapper>
    </>
  );
}
