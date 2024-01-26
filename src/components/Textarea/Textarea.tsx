interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className, ...props }: InputProps) => (
  <textarea
    {...props}
    className={`bg-gray-100 shadow w-full py-3 px-4 rounded-md placeholder:text-primaryGray ${className}`}
  />
);

export default Textarea;
