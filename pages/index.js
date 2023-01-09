import { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { StyledMain, StyledGridWrapper } from "../components/GlobalStyles";
import MemoryListCard from "../components/MemoryCard/MemoryListCard";
import InputAndLabelTextPair from "../components/Forms/Input/InputAndLabelTextPair";

export default function Overview({
  sampleEvents,
  onToggleFavorite,
  onDelete,
  onEditMemory,
}) {
  const [filteredData, setFilteredData] = useState([]);

  function handleFilter() {
    const searchEntry = event.target.value;

    const filteredDetails = sampleEvents.filter((sampleEvent) => {
      return (
        sampleEvent.details.toLowerCase().includes(searchEntry.toLowerCase()) ||
        sampleEvent.headline.toLowerCase().includes(searchEntry.toLowerCase())
      );
    });
    setFilteredData(filteredDetails);
  }
  // console.log(filteredData);
  // // (6) [{…}, {…}, {…}, {…}, {…}, {…}]

  const filteredResults = filteredData?.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <MemoryListCard
        sampleEvent={sampleEvent}
        onToggleFavorite={onToggleFavorite}
        onDelete={onDelete}
        onEditMemory={onEditMemory}
      />
    </Fragment>
  ));

  const memoriesList = sampleEvents?.map((sampleEvent) => (
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
          <InputAndLabelTextPair
            onFilter={handleFilter}
            type="text"
            name="search"
            placeholder={"type here ?"}
          />
          {filteredResults?.length === 0 ? memoriesList : filteredResults}
        </StyledMain>
        <Footer sampleEvents={sampleEvents} />
      </StyledGridWrapper>
    </>
  );
}
