import { render } from "@testing-library/react";
import { UserBirthdayInputForm } from "./";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

test("UserBirthdayInputForm component renders correctly", async () => {
  const { container } = render(<UserBirthdayInputForm />);

  expect(container.querySelector("form")).toBeInTheDocument();
});

describe("a11y", () => {
  test("No violations", async () => {
    const { container } = render(<UserBirthdayInputForm />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
