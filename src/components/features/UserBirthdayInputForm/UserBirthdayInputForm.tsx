import { useCallback } from "react";
import { useBirthdayInput } from "../../../hooks/useBirthdayInput/useBirthdayInput";

export function UserBirthdayInputForm() {
  const [isAllHaveValue, render] = useBirthdayInput();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>{render()}</div>
      <button disabled={!isAllHaveValue}>Submit</button>
    </form>
  );
}
