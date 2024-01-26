import React from "react";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, ...props }, ref) => (
    <textarea
      {...props}
      ref={ref}
      className={`bg-gray-100 shadow w-full py-3 px-4 rounded-md placeholder:text-primaryGray ${className}`}
    />
  ),
);

export default Textarea;
