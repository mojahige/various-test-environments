import { render, screen } from "@testing-library/react";
import { Hello } from "./";

test("hello renders correctly", async () => {
  render(<Hello />);

  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
