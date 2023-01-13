import styled from "styled-components";

export default function Greeting() {
  function dynamicGreeting() {
    let greeting;
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
      return (greeting = "morning 🛫");
    } else if (hours >= 12 && hours < 17) {
      return (greeting = "afternoon ☕️");
    } else {
      return (greeting = "night 😴");
    }
  }
  const timeoftheDay = dynamicGreeting();

  return (
    <StyledGreeting>
      <h1>Good {timeoftheDay} Beaver </h1>
    </StyledGreeting>
  );
}

const StyledGreeting = styled.section`
  align-self: flex-start;
`;
