import styled from "styled-components";
import CreateMemoryForm from "../Forms/CreateMemoryForm";

export default function CreateCard({ onHandleIsCreating, onAddCreateCard }) {
  return (
    <StyledCreatePage>
      <CreateMemoryForm
        onHandleIsCreating={onHandleIsCreating}
        onAddCreateCard={onAddCreateCard}
      />
    </StyledCreatePage>
  );
}

const StyledCreatePage = styled.section`
  background-color: var(--beaver3);
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  padding: 2rem;
`;
