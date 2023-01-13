export function rearrangeDates(date) {
  const changedDate = new Date(date);

  const day = String(changedDate.getDate()).padStart(2, "0");
  const month = String(changedDate.getMonth() + 1).padStart(2, "0");
  const year = changedDate.getFullYear();

  return `${day}.${month}.${year}`;
}

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

export function clipYear(memories) {
  memories
    ?.filter((memory) => {
      return memory.date >= new Date("2022-01-10");
    })
    .map((year) => {
      const date = new Date(year.date);
      const yearOnly = date.getFullYear();

      return yearOnly;
    });
}

//   use Array for Filtering for years
export const uniqueDate = Array.from(new Set());

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
