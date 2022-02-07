import { render, screen } from "@testing-library/react";
import { BirthdayInput, labels } from "./";

test("BirthdayInput component renders correctly", async () => {
  const { container } = render(<BirthdayInput />);

  labels.forEach((label) => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });
  expect(container.querySelectorAll("input").length).toBe(labels.length);
});
