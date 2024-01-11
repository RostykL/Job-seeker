interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  description: string;
  wrapperClassName?: string;
}

const Input = ({ description, wrapperClassName, ...props }: InputProps) => {
  return (
    <div className={wrapperClassName}>
      <input
        {...props}
        className="bg-white shadow-sm w-full py-3 px-4 rounded-xl placeholder:text-primaryGray"
      />
      <p className="px-2.5 text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default Input;
