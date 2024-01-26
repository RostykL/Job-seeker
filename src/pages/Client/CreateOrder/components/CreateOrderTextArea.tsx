import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Textarea from "src/components/Textarea";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  wrapperClassName?: string;
}

const CreateOrderTextArea = ({
  wrapperClassName,
  name,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div className={wrapperClassName}>
      <Textarea {...register(name)} {...props} />
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

export default CreateOrderTextArea;
