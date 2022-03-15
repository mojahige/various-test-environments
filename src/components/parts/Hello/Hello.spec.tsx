import { render, screen } from "@testing-library/react";
import { Hello } from "./";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

test("Hello component renders correctly", async () => {
  render(<Hello />);

  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

describe("a11y", () => {
  test("No violations", async () => {
    const { container } = render(<Hello />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
