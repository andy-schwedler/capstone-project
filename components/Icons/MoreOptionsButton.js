import { StyledButtonFrame } from "../GlobalStyles";
import MoreOptionsIcon from "./MoreOptionsIcon";

export function MoreOptionsButton() {
  return (
    <StyledButtonFrame onClick={() => onDelete(id)}>
      <MoreOptionsIcon />
    </StyledButtonFrame>
  );
}
