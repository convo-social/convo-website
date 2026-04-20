import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className = "", children, ...rest }: ContainerProps) {
  return (
    <div className={`container ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
