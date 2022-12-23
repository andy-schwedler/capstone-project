import { StyledButtonFrame } from "../GlobalStyles";
import { StyledCreatePage } from "./StyledCreateCard";

export default function CreateCard({ onHandleIsCreating, onAddCreateCard }) {
  return (
    <StyledCreatePage>
      <StyledButtonFrame onClick={onHandleIsCreating}>❌</StyledButtonFrame>
      <form onSubmit={onAddCreateCard}>
        <div>
          <label htmlFor="date">date</label>
          <label htmlFor="memory">your thought</label>
          <label htmlFor="isFavorite">favorite?</label>
        </div>
        <div>
          <input type="date" name="date" />
          <input type="checkbox" name="isFavorite" />
          <input placeholder="your favorite moment" name="memory" />
        </div>
        <div>
          <StyledButtonFrame type="submit">create</StyledButtonFrame>
          <StyledButtonFrame type="reset">reset</StyledButtonFrame>
        </div>
      </form>
    </StyledCreatePage>
  );
}
