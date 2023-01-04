import { StyledButtonFrame } from "../GlobalStyles";
import { StyledCreatePage } from "./StyledCreateCard";

export default function CreateCard({ onHandleIsCreating, onAddCreateCard }) {
  return (
    <StyledCreatePage>
      <form onSubmit={onAddCreateCard}>
        <fieldset>
          <legend>Create a new 🦫 memory</legend>
          <label hidden htmlFor="date">
            date
          </label>
          <input
            type="date"
            name="date"
            min="2022-01-01"
            max="2023-12-31"
            pattern="\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*"
            required
          />
          <label htmlFor="isFavorite">favorite?</label>
          <input type="checkbox" name="isFavorite" />
          <label hidden htmlFor="memory">
            your memory
          </label>
          <textarea placeholder="your favorite moment" name="memory" required />
          <div>
            <StyledButtonFrame type="submit">create</StyledButtonFrame>
            <StyledButtonFrame type="reset">reset</StyledButtonFrame>
            <StyledButtonFrame onClick={onHandleIsCreating}>
              cancel
            </StyledButtonFrame>
          </div>
        </fieldset>
      </form>
    </StyledCreatePage>
  );
}
