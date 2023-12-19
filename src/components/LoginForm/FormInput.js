import { memo } from "react";

export const FormInput = ({ name, value, setValue, isError }) => {
  return (
    <input
      name={name}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{ border: `${isError ? " 1px solid red" : ""}` }}
    />
  );
};

export default memo(FormInput);
