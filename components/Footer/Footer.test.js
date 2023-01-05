import { render } from "@testing-library/react";
import Footer from "./Footer";

test("renders create button", () => {
  render(<Footer />);

  const createButon = screen.getByRole("button");
  expect(createButon).toBeInTheDocument();
});
