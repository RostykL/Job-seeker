import Select from "react-select";

export interface MultiSelectProps {
  description: string;
  wrapperClassName: string;
}

const MultiSelect = ({ description, wrapperClassName }: MultiSelectProps) => {
  return (
    <div className={wrapperClassName}>
      <div className="py-3 px-4 bg-white shadow-sm rounded-xl">
        <Select
          isMulti
          name="tags"
          options={[{ label: "hey" }, { label: "hey 2" }]}
          placeholder="Виберіть теги"
        />
      </div>
      <p className="px-2.5 text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default MultiSelect;
