import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as?: ElementType; // a type that represents a React component that is the identifer of the component not the JSX element
  children: ReactNode; // JSX
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div"; // remaping the as prop to Component since as is lowercase and Component is uppercase
  return <Component {...props}>{children}</Component>;
}
