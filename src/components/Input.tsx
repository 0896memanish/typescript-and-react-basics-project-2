import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} ref={ref} />
    </p>
  );
});

export default Input;
