import React from "react";
import { StyledGridWrapper } from "..";
import Footer from "../../components/Footer/Footer";
import CreateMemoryForm from "../../components/Forms/CreateMemoryForm";
import { StyledMain } from "../../components/GlobalStyles";
import Header from "../../components/Header/Header";

export default function CreatePage({
  sampleEvents,
  onAddCreateCard,
  image,
  imageValue,
  onImage,
}) {
  return (
    <StyledGridWrapper>
      <Header />
      <StyledMain>
        <CreateMemoryForm
          image={image}
          imageValue={imageValue}
          onImage={onImage}
          onAddCreateCard={onAddCreateCard}
        />
      </StyledMain>
      <Footer sampleEvents={sampleEvents} />
    </StyledGridWrapper>
  );
}
