import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...otherProps },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} name={id} {...otherProps} />
    </p>
  );
});

export default Input;
