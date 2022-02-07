import { render, screen } from "@testing-library/react";
import { Input } from "./";

test("Input component renders correctly", async () => {
  render(<Input placeholder="input" />);

  expect(screen.getByPlaceholderText("input")).toBeInTheDocument();
});
