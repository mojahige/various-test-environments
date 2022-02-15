import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { useBirthdayInput } from "./";

test("should use birthday input", () => {
  const { result } = renderHook(() => useBirthdayInput());
  const [isAllHaveValue, render] = result.current;

  expect(isAllHaveValue).toBe(false);
  expect(render).toBeInstanceOf(Function);
});

test("`useBirthdayInput` must return true if all input elements have a value.", async () => {
  const Test = () => {
    const [isAllHaveValue, render] = useBirthdayInput();

    return (
      <div>
        <p>{String(isAllHaveValue)}</p>
        {render()}
      </div>
    );
  };
  const { container } = render(<Test />);
  const inputElements = container.querySelectorAll("input");

  inputElements.forEach((inputElement, index) => {
    userEvent.type(inputElement, `${index}`);

    expect(
      screen.getByText(index === inputElements.length - 1 ? "true" : "false")
    ).toBeInTheDocument();
  });

  await userEvent.clear(inputElements[0]);

  expect(screen.getByText("false")).toBeInTheDocument();
});
