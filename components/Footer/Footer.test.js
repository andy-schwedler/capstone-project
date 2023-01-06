import Footer from "./Footer";

test("renders create button", () => {
  render(<Footer />);

  const createButton = screen.getByLabel("button", { name: /createicon/i });
  expect(createButton).toBeInTheDocument();
});
