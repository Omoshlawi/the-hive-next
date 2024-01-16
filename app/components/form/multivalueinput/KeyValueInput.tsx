"use client";
import React, { useState } from "react";
import { Input } from "../../ui/input";
import { Check, Plus } from "lucide-react";
import clsx from "clsx";

interface Props {
  value?: { name: string; value: string };
  onChange?: (value: { name: string; value: string }) => void;
  keyplaceholder?: string;
  valueplaceholder?: string;
  className?: string;
  disabled?: boolean;
  validator?: (value: { name: string; value: string }) => boolean;
}

const KeyValueInput: React.FC<Props> = ({
  onChange,
  value,
  className,
  keyplaceholder,
  valueplaceholder,
  disabled = false,
  validator,
}) => {
  const [values, setValues] = useState({
    name: value?.name ?? "",
    value: value?.value ?? "",
  });

  return (
    <div className="flex space-x-2 items-center ">
      <div>
        <Input
          disabled={disabled}
          placeholder={keyplaceholder}
          value={values.name}
          onChange={({ target: { value: name } }) =>
            setValues((val) => ({ ...val, name }))
          }
        />
      </div>
      <div className="flex flex-grow items-center space-x-2">
        <Input
          disabled={disabled}
          placeholder={valueplaceholder}
          value={values.value}
          onChange={({ target: { value: newVal } }) =>
            setValues((val) => ({ ...val, value: newVal }))
          }
        />
        <div
          className={clsx("rounded-md hover:opacity-25", {
            visible: typeof validator !== "function" || validator?.(values),
            invisible: typeof validator === "function" && !validator(values),
          })}
        >
          <Check
            onClick={() => {
              onChange?.(values);
              setValues({ name: "", value: "" });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyValueInput;
