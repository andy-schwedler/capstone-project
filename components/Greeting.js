import styled from "styled-components";

export default function Greeting() {
  function dynamicGreeting() {
    let greeting;
    const date = new Date();
    const hours = date.getHours();

    if (hours < 11) {
      return (greeting = "Good morning 🛫 ");
    } else if (hours >= 11 && hours < 13) {
      return (greeting = "It´s around lunch time");
    } else if (hours >= 13 && hours < 18) {
      return (greeting = "Good afternoon");
    } else if (hours >= 18 && hours < 21) {
      return (greeting = "Have a nice evening");
    } else if (hours >= 21) {
      return (greeting = "Have a good night 😴 ");
    }
  }
  const timeoftheDay = dynamicGreeting();

  return (
    <StyledGreeting>
      <h1>{timeoftheDay}, Beaver </h1>
    </StyledGreeting>
  );
}

const StyledGreeting = styled.section`
  align-self: flex-start;
`;
