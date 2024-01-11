export interface Checkbox extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  label: string;
}

const Checkbox = ({ htmlFor, label, ...props }: Checkbox) => {
  return (
    <div className="flex items-center gap-2">
      <input
        {...props}
        type="checkbox"
        id={htmlFor}
        className="checked:bg-blue-500 w-4 h-4"
      />
      <label htmlFor={htmlFor} className="uppercase text-xs font-medium">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
