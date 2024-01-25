import { RegisterOptions, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  registerOptions?: RegisterOptions;
  wrapperClassName?: string;
}

const Textarea = ({
  wrapperClassName,
  name,
  registerOptions,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div className={wrapperClassName}>
      <textarea
        {...props}
        {...register(name, registerOptions)}
        className="bg-gray-100 shadow w-full py-3 px-4 rounded-md placeholder:text-primaryGray"
      />
      {touchedFields[name] ? (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="px-2.5 text-xs text-red-600 first-letter:capitalize">
              {message}
            </p>
          )}
        />
      ) : null}
    </div>
  );
};

export default Textarea;
