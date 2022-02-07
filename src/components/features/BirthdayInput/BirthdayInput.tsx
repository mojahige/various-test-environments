import React from "react";
import { Input } from "../../parts/Input";

export type OnChangeArguments = {
  event: React.ChangeEvent<HTMLInputElement>;
  index: number;
};

type Props = {
  onChange?: (args: OnChangeArguments) => void;
  id?: string;
};

export const labels = ["year", "month", "day"] as const;

export function BirthdayInput({ onChange, id }: Props) {
  return (
    <>
      {labels.map((value, index) => (
        <span key={value}>
          <label
            htmlFor={`${id ?? ""}${value}${index}`}
            style={{
              textTransform: "capitalize",
            }}
          >
            {value}
          </label>
          <Input
            id={`${id ?? ""}${value}${index}`}
            onChange={
              onChange
                ? (event: React.ChangeEvent<HTMLInputElement>) =>
                    onChange({
                      event,
                      index,
                    })
                : undefined
            }
            type="text"
          />
        </span>
      ))}
    </>
  );
}
