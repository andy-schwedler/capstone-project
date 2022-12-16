import { Fragment } from "react";
import { StyledCardSection } from "..";
import EventCard from "../../components/EventCard";
import Footer from "../../components/Footer";
import { StyledMain } from "../../components/GlobalStyles";
import Header from "../../components/Header";

export default function Bookmarks({ events }) {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>
          {events.find((event) => event.isFavorite === true) ? (
            <Fragment>
              <h1>true</h1>
            </Fragment>
          ) : (
            <Fragment>
              <h1>false</h1>
            </Fragment>
          )}
        </StyledCardSection>
      </StyledMain>
      <Footer />
    </>
  );
}
