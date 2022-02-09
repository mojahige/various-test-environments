import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BirthdayInput, labels } from "./";
import type { OnChangeArguments } from "./";

test("BirthdayInput component renders correctly", async () => {
  const { container } = render(<BirthdayInput />);

  expect(container.querySelectorAll("label")).toHaveLength(labels.length);
  expect(container.querySelectorAll("input")).toHaveLength(labels.length);

  labels.forEach((label, index) => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(
      container.querySelector(`input#${label}${index}`)
    ).toBeInTheDocument();
    expect(
      container.querySelector(`[for="${label}${index}"]`)
    ).toBeInTheDocument();
  });
});

describe("props", () => {
  test("`idPrefix` must be used as a prefix for the value of the id attribute.", async () => {
    const { container } = render(<BirthdayInput idPrefix="test" />);

    labels.forEach((label, index) => {
      expect(
        container.querySelector(`input#test${label}${index}`)
      ).toBeInTheDocument();
      expect(
        container.querySelector(`[for="test${label}${index}"]`)
      ).toBeInTheDocument();
    });
  });

  test("`onChange` must be used as a handler for the change event", async () => {
    const testHandler = vi.fn(({ event, index }: OnChangeArguments) => ({
      value: event.currentTarget.value,
      index,
    }));
    const { container } = render(<BirthdayInput onChange={testHandler} />);
    const firstInputElement = container.querySelector("input");

    if (firstInputElement == null) {
      throw new Error("No input element found.");
    }

    userEvent.type(firstInputElement, "t");

    expect(testHandler).toHaveBeenCalledTimes(1);
    expect(testHandler).toHaveReturnedWith({
      value: "t",
      index: 0,
    });
  });
});
