import styled from "styled-components";

export default function Greeting() {
  function dynamicGreeting() {
    let greeting;
    const date = new Date();
    const hours = date.getHours();

    if (hours < 11) {
      return (greeting = "Good morning,");
    } else if (hours >= 11 && hours < 13) {
      return (greeting = "Servus,");
    } else if (hours >= 13 && hours < 18) {
      return (greeting = "Good afternoon,");
    } else if (hours >= 18 && hours < 21) {
      return (greeting = "Good evening,");
    } else if (hours >= 21) {
      return (greeting = "Bedtime,");
    }
  }
  const timeoftheDay = dynamicGreeting();

  return (
    <StyledGreeting>
      <h1>
        <span>{timeoftheDay}</span> Beaver
      </h1>
    </StyledGreeting>
  );
}

const StyledGreeting = styled.section`
  align-self: flex-start;
  margin: 1em;

  h1 {
    margin: 0;
  }

  span {
    color: #efefef;
    border-radius: 0.2em;
    padding: 0.2em;
    background-color: var(--beaver);
  }
`;
