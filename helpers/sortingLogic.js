// this will rearrange the date to a more beaver friendly format
export function rearrangeDates(date) {
  const changedDate = new Date(date);

  const day = String(changedDate.getDate()).padStart(2, "0");
  const month = String(changedDate.getMonth() + 1).padStart(2, "0");
  const year = changedDate.getFullYear();

  return `${day}.${month}.${year}`;
}

// returns objects sorted in a descending order
export function sortNewestFirst(memories) {
  return memories
    ?.slice()
    ?.sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return date1 - date2;
    })
    .reverse();
}

// returns objects sorted in a descending order
export function sortOldestFirst(memories) {
  return memories
    ?.slice()
    ?.sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return date2 - date1;
    })
    .reverse();
}

export function clipYear(memories) {
  memories
    ?.filter((memory) => {
      const formatYear = new Date(memory.date);

      return memory.date > new Date("2022-01-01");
    })
    .map((year) => {
      const date = new Date(year.date);
      const yearOnly = date.getFullYear();

      return yearOnly;
    });
}

// function sortYear(memories) {
//   return memories?.filter((memory) => {
//     const allDates = new Date(memory.date).getFullYear();
//     return allDates;
//   });
// }
// const sortThisYear = sortYear();
// console.log(sortThisYear);

// // Filtering for years => creates new Array with duplicates removed
// export const uniqueDate = Array.from(new Set());

// sorting ascending / oldest first
export function handleAscendingSort(data) {
  const ascendingData = data?.slice().sort((a, b) => {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return date1 - date2;
  });
  return ascendingData;
}
// [DEFAULT] sorting descending / newest first
export function handleDescendingSort(data) {
  const descendingData = data?.slice().sort((a, b) => {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return date2 - date1;
  });
  return descendingData;
}
