interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperClassName?: string;
}

const Textarea = ({ wrapperClassName, ...props }: InputProps) => {
  return (
    <div className={wrapperClassName}>
      <textarea
        {...props}
        className="bg-gray-100 shadow w-full py-3 px-4 rounded-md placeholder:text-primaryGray"
      />
      {/*<p className="px-2.5 text-xs text-gray-500">{description}</p>*/}
    </div>
  );
};

export default Textarea;
