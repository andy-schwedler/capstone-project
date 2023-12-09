import Head from "next/head";
import { useEffect, useState } from "react";
import DisplayMessage from "../components/DisplayMessage";
import GlobalStyles, { StyledGridWrapper } from "../components/GlobalStyles";
import Header from "../components/Header/Header";
import { handleDescendingSort } from "../helpers/sortingLogic";

function MyApp({ Component, pageProps }) {
  // stores data from MongoDB
  const [sampleEvents, setSampleEvents] = useState();
  // stores uploaded image
  const [image, setImage] = useState(null);
  // stores users input
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

  function handleImage(event) {
    setImage(event.target.files[0]);
  }

  async function ImageUpload(event) {
    event.preventDefault();

    // if no image was chosen
    if (!image) {
      return;
    } else {
      const formData = new FormData(event.target);

      formData.append("file", image);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

      const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const json = await response.json();

      return json.secure_url;
    }
  }

  // METHOD "POST"
  async function handleAddCreateCard(event) {
    event.preventDefault();

    // ./components/FORMS/CreateMemoryForm
    const date = new Date();
    const headline = event.target.elements.headline.value;
    const details = event.target.elements.details.value;
    const isFavorite = event.target.bookmark.checked;

    //  "post" picture on cloudinary and returns URL string
    const picture = await ImageUpload(event);

    // ../../db/models/Memory
    const newEntry = {
      date: date,
      headline: headline,
      details: details,
      isFavorite: isFavorite,
      picture: picture,
    };

    // "POST" memories
    await fetch("/api/memories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });

    getMemories();

    event.target.reset();
    event.target.headline.focus();
  }
  // DELETE memories
  async function handleDeleteMemoryCard(id) {
    if (confirm("Are you sure you want to delete?")) {
      await fetch("/api/memories/" + id, {
        method: "DELETE",
      });
    }
    getMemories();
  }
  // UPDATE memories
  async function handleEditMemory(updatedMemory, id) {
    await fetch("/api/memories/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMemory),
    });
    getMemories();
  }
  // fetch data from database // replace with ./lib/fetch.js
  async function getMemories() {
    const response = await fetch("/api/memories");
    const memoriesList = await response.json();

    const sortedArray = handleDescendingSort(memoriesList);
    setSampleEvents(sortedArray);
  }
  useEffect(() => {
    getMemories();
  }, []);

  // toggle favorite Button
  function handleToggleFavorite(id) {
    setSampleEvents(
      sampleEvents.map((sampleEvent) =>
        sampleEvent.id === id
          ? { ...sampleEvent, isFavorite: !sampleEvent.isFavorite }
          : sampleEvent
      )
    );
  }

  return (
    <>
      <title>🦫 Memories 💭</title>

      <GlobalStyles />
      {!sampleEvents ? (
        <StyledGridWrapper>
          <Header />
          <DisplayMessage message={"...loading"} />
        </StyledGridWrapper>
      ) : (
        <Component
          {...pageProps}
          sampleEvents={sampleEvents}
          onToggleFavorite={handleToggleFavorite}
          onAddCreateCard={handleAddCreateCard}
          onDelete={handleDeleteMemoryCard}
          onEditMemory={handleEditMemory}
          onImage={handleImage}
          searchTerm={searchTerm}
          onSearch={handleSearch}
        />
      )}
    </>
  );
}

export default MyApp;
