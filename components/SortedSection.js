import { Fragment } from "react";
import styled from "styled-components";
import MemoryPreview from "./MemoryCard/MemoryPreview";

export default function SortedSection({
  sampleEvents,
  onToggleFavorite,
  onDelete,
  onEditMemory,
}) {
  const sortNewestFirst = sampleEvents
    ?.slice()
    ?.sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return date1 - date2;
    })
    .reverse()
    .map((sampleEvent) => (
      <Fragment key={sampleEvent.id}>
        <MemoryPreview
          sampleEvent={sampleEvent}
          onToggleFavorite={onToggleFavorite}
        />
      </Fragment>
    ));

  const years = sampleEvents
    ?.filter((sampleEvent) => {
      return sampleEvent.date >= "2022-01-10";
    })
    .map((year) => {
      const date = new Date(year.date);
      const yearOnly = date.getFullYear();

      return yearOnly;
    });

  const uniqueDate = Array.from(new Set(years));
  console.log(uniqueDate);

  return (
    <>
      <h3>recently created</h3>
      <StyledSortedSection>{sortNewestFirst}</StyledSortedSection>
    </>
  );
}

const StyledSortedSection = styled.section`
  display: flex;
  overflow-y: hidden;
`;
