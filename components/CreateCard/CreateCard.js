import { StyledButtonFrame } from "../GlobalStyles";
import { StyledCreatePage } from "./StyledCreateCard";

export default function CreateCard({ onHandleIsCreating, onAddCreateCard }) {
  return (
    <StyledCreatePage>
      <StyledButtonFrame onClick={onHandleIsCreating}>❌</StyledButtonFrame>
      <form onSubmit={onAddCreateCard}>
        <fieldset>
          <div>
            <label htmlFor="date">date</label>
            <input type="date" name="date" />
          </div>
          <div>
            <label htmlFor="isFavorite">favorite?</label>
            <input type="checkbox" name="isFavorite" />
          </div>
          <div>
            <label htmlFor="memory">your memory</label>
            <input placeholder="your favorite moment" name="memory" />
          </div>
          <div>
            <StyledButtonFrame type="submit">create</StyledButtonFrame>
            <StyledButtonFrame type="reset">reset</StyledButtonFrame>
          </div>
        </fieldset>
      </form>
    </StyledCreatePage>
  );
}
