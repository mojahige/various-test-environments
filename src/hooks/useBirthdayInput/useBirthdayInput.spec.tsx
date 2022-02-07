// import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useBirthdayInput } from "./";

test("should use birthday input", () => {
  const { result } = renderHook(() => useBirthdayInput());
  const [isAllHaveValue, render] = result.current;

  expect(isAllHaveValue).toBe(false);
  expect(render).toBeInstanceOf(Function);
});

// test("renders correctly", () => {
//   const { result } = renderHook(() => useBirthdayInput());
//   const useBirthdayInputRender = result.current[1];

//   render(<form>{useBirthdayInputRender()}</form>);

//   screen.getAllByLabelText();
// });
