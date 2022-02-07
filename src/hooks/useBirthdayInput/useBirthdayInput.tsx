import { useState, useCallback, useMemo } from "react";
import { labels, BirthdayInput } from "../../components/features/BirthdayInput";
import type { OnChangeArguments } from "../../components/features/BirthdayInput";

type UseBirthdayInputResult = [boolean, () => JSX.Element];

export function useBirthdayInput(): UseBirthdayInputResult {
  const [inputValues, setInputValues] = useState<Array<string>>(() =>
    labels.map(() => "")
  );
  const handleChange = useCallback(
    ({ event, index }: OnChangeArguments) => {
      const newState = [...inputValues];

      newState[index] = event.currentTarget.value;
      setInputValues(newState);
    },
    [inputValues]
  );
  const isAllHaveValue = useMemo(
    () => !inputValues.includes(""),
    [inputValues]
  );
  const render = () => <BirthdayInput onChange={handleChange} />;

  return [isAllHaveValue, render];
}
