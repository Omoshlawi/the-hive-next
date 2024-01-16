"use client";
import React, { useRef, useState } from "react";
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
  value: defaultValue,
  className,
  keyplaceholder,
  valueplaceholder,
  disabled = false,
  validator,
}) => {
  // const [values, setValues] = useState({
  //   name: value?.name ?? "",
  //   value: value?.value ?? "",
  // });
  const nameRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);

  const handleReset = () => {
    if (nameRef.current) nameRef.current.value = "";
    if (valueRef.current) valueRef.current.value = "";
  };

  return (
    <div className="flex space-x-2 items-center ">
      <div>
        <Input
          ref={nameRef}
          disabled={disabled}
          placeholder={keyplaceholder}
          defaultValue={defaultValue?.name}

          // value={value?.name}
          // onChange={({ target: { value: name } }) =>
          //   setState((val) => ({ ...val, name }))
          // }
        />
      </div>
      <div className="flex flex-grow items-center space-x-2">
        <Input
          ref={valueRef}
          disabled={disabled}
          placeholder={valueplaceholder}
          defaultValue={defaultValue?.value}
          // value={value?.value}
          // onChange={({ target: { value: newVal } }) =>
          //   setValues((val) => ({ ...val, value: newVal }))
          // }
        />
        <div>
          <Check
            onClick={() => {
              // onChange?.(values);
              // setValues({ name: "", value: "" });
              const name = nameRef.current?.value;
              const value = valueRef.current?.value;
              if (!(defaultValue?.name && defaultValue.value)) handleReset();
              if (name && value) {
                if (typeof validator === "function") {
                  if (validator({ name, value })) onChange?.({ name, value });
                } else onChange?.({ name, value });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyValueInput;
