import { StyledCardSection } from "../components/CardSection/StyledCardSection";
import Footer from "../components/Footer/Footer";
import { StyledMain } from "../components/GlobalStyles";
import Header from "../components/Header/Header";
import { Eventlist } from "../data/events";

export default function Home() {
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
