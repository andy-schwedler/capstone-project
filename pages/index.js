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
  const [searchTerm, setSearchTerm] = useState([]);

  function handleSearch() {
    const searchEntry = event.target.value;

    const filteredDetails = sampleEvents.filter((sampleEvent) => {
      return (
        sampleEvent.details.toLowerCase().includes(searchEntry.toLowerCase()) ||
        sampleEvent.headline.toLowerCase().includes(searchEntry.toLowerCase())
      );
    });
    setSearchTerm(filteredDetails);
  }

  const filteredResults = searchTerm?.map((sampleEvent) => (
    <Fragment key={sampleEvent.id}>
      <MemoryListCard
        sampleEvent={sampleEvent}
        onToggleFavorite={onToggleFavorite}
        onDelete={onDelete}
        onEditMemory={onEditMemory}
      />
    </Fragment>
  ));

  const sortedList = sampleEvents
    ?.slice()
    .sort(function (a, b) {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);

      return date1 - date2;
    })
    .map((sampleEvent) => (
      <Fragment key={sampleEvent.id}>
        <MemoryListCard
          sampleEvent={sampleEvent}
          onToggleFavorite={onToggleFavorite}
          onDelete={onDelete}
          onEditMemory={onEditMemory}
        />
      </Fragment>
    ));

  console.log(sortedList);

  return (
    <>
      <StyledGridWrapper>
        <Header />
        <StyledMain>
          <InputAndLabelTextPair
            onSearch={handleSearch}
            type="text"
            name="search"
            placeholder={"search"}
          />
          {filteredResults?.length === 0 ? sortedList : filteredResults}
        </StyledMain>
        <Footer sampleEvents={sampleEvents} />
      </StyledGridWrapper>
    </>
  );
}
