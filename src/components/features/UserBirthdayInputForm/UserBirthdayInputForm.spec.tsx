import { render } from "@testing-library/react";
import { UserBirthdayInputForm } from "./";

test("UserBirthdayInputForm component renders correctly", async () => {
  const { container } = render(<UserBirthdayInputForm />);

  expect(container.querySelector("form")).toBeInTheDocument();
});
