import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      {...props}
      ref={ref}
      className={`bg-gray-100 shadow w-full py-3 px-4 rounded-md placeholder:text-primaryGray ${className}`}
    />
  ),
);

export default Input;
