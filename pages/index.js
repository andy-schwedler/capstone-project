import { StyledCardSection } from "../components/CardSection/StyledCardSection";
import Footer from "../components/Footer";
import { StyledLink, StyledMain } from "../components/GlobalStyles";
import Header from "../components/Header";
import { initialEvents } from "../data/events";

export default function Schedule() {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>
          {initialEvents.map((event) => (
            <StyledLink href="/" key={event.id}>
              <article>
                <h3 key={event.id}>{event.name}</h3>
                <div>
                  <p>{event.date}</p>
                  <p>{event.category}</p>
                </div>
              </article>
            </StyledLink>
          ))}
        </StyledCardSection>
      </StyledMain>
      <Footer />
    </>
  );
}
