import React from "react";
import KeyValueInput from "./KeyValueInput";
import { Trash2 } from "lucide-react";

interface Props {
  value?: { name: string; value: any }[];
  onChange?: (value: { name: string; value: any }[]) => void;
  validator?: (value: { name: string; value: string }) => boolean;
}

const MultiKeyvalueInput: React.FC<Props> = ({
  onChange,
  value = [],
  validator,
}) => {
  const handleChange = (newValue: { name: string; value: any }) => {
    const index = value.findIndex((f) => f.name === newValue.name);
    if (index === -1) {
      // Add if not exist
      onChange?.([...value, newValue]);
    } else {
      // Update
      const newValues = [...value];
      newValues[index] = newValue;
      onChange?.(newValues);
    }
  };

  const handleDelete = (nameToDelete: string) => {
    // Delete
    const newValues = value.filter((f) => f.name !== nameToDelete);
    onChange?.(newValues);
  };
  return (
    <div className="mb-2 space-y-2">
      {value.map((val, index) => (
        <div className="flex space-x-2 items-center" key={val.name}>
          <div className="flex-1">
            <KeyValueInput
              value={val}
              onChange={handleChange}
              validator={validator}
            />
          </div>
          <Trash2
            className="hover:opacity-25 text-red-900"
            onClick={() => handleDelete(val.name)}
          />
        </div>
      ))}
      {value && (
        <div className="flex space-x-2 items-center">
          <div className="flex-1">
            <KeyValueInput
              onChange={handleChange}
              validator={validator}
              value={{ name: "", value: "" }}
            />
          </div>
          <Trash2 className="invisible" />
        </div>
      )}
    </div>
  );
};

export default MultiKeyvalueInput;
