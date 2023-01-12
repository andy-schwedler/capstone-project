import { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { StyledMain, StyledGridWrapper } from "../components/GlobalStyles";
import MemoryListCard from "../components/MemoryCard/MemoryListCard";
import SearchBar from "../components/SearchBar";
import SortingBar from "../components/SortingBar";

export default function Overview({
  sampleEvents,
  onToggleFavorite,
  onDelete,
  onEditMemory,
  onAscendingSort,
  onDescendingSort,
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

  const searchResults = searchTerm?.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <MemoryListCard
        sampleEvent={sampleEvent}
        onToggleFavorite={onToggleFavorite}
        onDelete={onDelete}
        onEditMemory={onEditMemory}
      />
    </Fragment>
  ));

  const allMemories = sampleEvents?.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <MemoryListCard
        sampleEvent={sampleEvent}
        onToggleFavorite={onToggleFavorite}
        onDelete={onDelete}
        onEditMemory={onEditMemory}
      />
    </Fragment>
  ));

  return (
    <>
      <StyledGridWrapper>
        <Header />
        <StyledMain>
          <SortingBar
            onAscendingSort={onAscendingSort}
            onDescendingSort={onDescendingSort}
          />
          <SearchBar onSearch={handleSearch} />
          {searchResults?.length === 0 ? allMemories : searchResults}
        </StyledMain>
        <Footer sampleEvents={sampleEvents} />
      </StyledGridWrapper>
    </>
  );
}
