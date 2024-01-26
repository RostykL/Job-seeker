interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: InputProps) => (
  <input
    {...props}
    className={`bg-gray-100 shadow w-full py-3 px-4 rounded-md placeholder:text-primaryGray ${className}`}
  />
);

export default Input;
