import React from "react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  label: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ htmlFor, label, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          id={htmlFor}
          className="checked:bg-blue-500 w-4 h-4"
        />
        <label htmlFor={htmlFor} className="text-xs font-medium">
          {label}
        </label>
      </div>
    );
  },
);

export default Checkbox;
