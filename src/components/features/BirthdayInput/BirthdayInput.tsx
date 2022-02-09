import React from "react";
import { Input } from "../../parts/Input";

export type OnChangeArguments = {
  event: React.ChangeEvent<HTMLInputElement>;
  index: number;
};

type Props = {
  onChange?: (args: OnChangeArguments) => void;
  idPrefix?: string;
};

export const labels = ["year", "month", "day"] as const;

export function BirthdayInput({ onChange, idPrefix }: Props) {
  return (
    <>
      {labels.map((label, index) => (
        <span key={label}>
          <label
            htmlFor={`${idPrefix ?? ""}${label}${index}`}
            style={{
              textTransform: "capitalize",
            }}
          >
            {label}
          </label>
          <Input
            id={`${idPrefix ?? ""}${label}${index}`}
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
