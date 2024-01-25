import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  wrapperClassName?: string;
}

const Input = ({ wrapperClassName, name, ...props }: InputProps) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div className={wrapperClassName}>
      <input
        {...props}
        {...register(name)}
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

export default Input;
