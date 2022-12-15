import { StyledCardSection } from "../components/StyledCardSection";
import Footer from "../components/Footer";
import { StyledMain } from "../components/GlobalStyles";
import Header from "../components/Header";
import { initialEvents } from "../data/initialEvents";
import Link from "next/link";
import StyledLink from "../components/GlobalStyles";

export default function Schedule() {

  return (
    <>
      <Header />
      <StyledMain>
        <StyledCardSection>
    {initialEvents.map((event) => (
      <Link href="/" key={event.id}>
        <article>
          <h3 key={event.id}>{event.name}</h3>
          <div>
            <p>{event.date}</p>
            <p>{event.category}</p>
          </div>
        </article>
      </Link>
    ))}
</StyledCardSection>
      </StyledMain>
      <Footer />
    </>
  );
}
