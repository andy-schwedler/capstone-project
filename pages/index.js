import { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { StyledMain, StyledGridWrapper } from "../components/GlobalStyles";
import SearchBar from "../components/SearchBar";
import Greeting from "../components/Greeting/Greeting";
import ExpandSection from "../components/ExpandSection/ExpandSection";
import { sortNewestFirst, sortOldestFirst } from "../helpers/sortingLogic";
import MemoryPreview from "../components/MemoryCard/MemoryPreview";

export default function Overview({
  sampleEvents,
  onToggleFavorite,
  onDelete,
  onEditMemory,
}) {
  const [searchTerm, setSearchTerm] = useState([]);

  function handleSearch(event) {
    const searchEntry = event.target.value;

    const filteredDetails = sampleEvents.filter((sampleEvent) => {
      //  if nothing was entered by the user, no list will be created
      if (searchEntry === "") {
        return null;
      } else
        return (
          sampleEvent.details
            .toLowerCase()
            .includes(searchEntry.toLowerCase()) ||
          sampleEvent.headline.toLowerCase().includes(searchEntry.toLowerCase())
        );
    });
    setSearchTerm(filteredDetails);
  }
  const results = searchTerm?.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <MemoryPreview sampleEvent={sampleEvent} />
    </Fragment>
  ));

  const sortedDescending = sortNewestFirst(sampleEvents)?.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <MemoryPreview sampleEvent={sampleEvent} />
    </Fragment>
  ));

  const sortedAscending = sortOldestFirst(sampleEvents)?.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <MemoryPreview sampleEvent={sampleEvent} />
    </Fragment>
  ));

  return (
    <>
      <StyledGridWrapper>
        <Header />
        <StyledMain>
          <Greeting />
          <SearchBar onSearch={handleSearch} />
          {searchTerm?.length === 0 ? (
            <>
              <ExpandSection data={sortedDescending} headline="recently" />
              <ExpandSection data={""} headline="last 30 days" />
              <ExpandSection data={sortedAscending} headline="old to new" />
            </>
          ) : (
            results
          )}
        </StyledMain>
        <Footer sampleEvents={sampleEvents} />
      </StyledGridWrapper>
    </>
  );
}
