import { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { StyledGridWrapper, StyledMain } from "../components/GlobalStyles";
import SearchBar from "../components/SearchBar";
import Greeting from "../components/Greeting/Greeting";
import ExpandSection from "../components/ExpandSection/ExpandSection";
import {
  handleDescendingSort,
  handleAscendingSort,
} from "../helpers/sortingLogic";
import MemoryPreview from "../components/MemoryCard/MemoryPreview";

export default function Overview({ sampleEvents, searchTerm, onSearch }) {
  const results = searchTerm?.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <MemoryPreview sampleEvent={sampleEvent} />
    </Fragment>
  ));

  const sortedDescending = handleDescendingSort(sampleEvents)?.map(
    (sampleEvent) => (
      <MemoryPreview key={sampleEvent.id} sampleEvent={sampleEvent} />
    )
  );

  const sortedAscending = handleAscendingSort(sampleEvents)?.map(
    (sampleEvent) => (
      <MemoryPreview key={sampleEvent.id} sampleEvent={sampleEvent} />
    )
  );

  return (
    <div>
      <Header />
      <StyledMain>
        <Greeting />
        <SearchBar onSearch={onSearch} />
        {searchTerm?.length === 0 ? (
          <>
            <ExpandSection
              data={sortedDescending}
              headline="recently created"
            />
            <ExpandSection data={sortedAscending} headline="ascending order" />
          </>
        ) : (
          results
        )}
      </StyledMain>
      <Footer sampleEvents={sampleEvents} />
    </div>
  );
}
