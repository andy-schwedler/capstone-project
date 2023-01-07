import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders a heading", () => {
  render(<Header />);
  const heading = screen.getByRole("heading", {
    name: /beaver 💭 memories/i,
  });
  expect(heading).toBeInTheDocument;
});
