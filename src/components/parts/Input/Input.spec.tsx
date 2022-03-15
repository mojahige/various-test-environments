import { render, screen } from "@testing-library/react";
import { Input } from "./";
import { toHaveNoViolations, configureAxe } from "jest-axe";

expect.extend(toHaveNoViolations);

test("Input component renders correctly", async () => {
  render(<Input placeholder="input" />);

  expect(screen.getByPlaceholderText("input")).toBeInTheDocument();
});

describe("a11y", () => {
  test("No violations", async () => {
    const { container } = render(<Input />);
    const results = await configureAxe({
      rules: {
        label: { enabled: false },
      },
    })(container);

    expect(results).toHaveNoViolations();
  });
});
