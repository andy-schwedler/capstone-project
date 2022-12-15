import { useState } from "react";
import { StyledCardSection } from "../components/CardSection/StyledCardSection";
import Footer from "../components/Footer/Footer";
import { StyledMain } from "../components/GlobalStyles";
import Header from "../components/Header/Header";
import { initialEvents, Eventlist } from "../data/events";

export default function Schedule() {
  const [events, setEvents] = useState(initialEvents);
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>{Eventlist}</StyledCardSection>
      </StyledMain>
      <Footer />
    </>
  );
}
