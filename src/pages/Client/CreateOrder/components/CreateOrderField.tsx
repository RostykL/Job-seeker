import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Input from "src/components/Input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  wrapperClassName?: string;
}

const CreateOrderField = ({ wrapperClassName, name, ...props }: InputProps) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div className={wrapperClassName}>
      <Input {...register(name)} {...props} />
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

export default CreateOrderField;
