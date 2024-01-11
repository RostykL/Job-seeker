interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  description: string;
  wrapperClassName?: string;
}

const Textarea = ({ description, wrapperClassName, ...props }: InputProps) => {
  return (
    <div className={wrapperClassName}>
      <textarea
        {...props}
        className="bg-white shadow-sm w-full py-3 px-4 rounded-xl placeholder:text-primaryGray"
      />
      <p className="px-2.5 text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default Textarea;
