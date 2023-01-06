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
  display: flex;
  flex-direction: column;
  background-color: var(--beaver3);
  color: var(--beaver2);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px;
`;
