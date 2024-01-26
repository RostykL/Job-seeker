import { useFormContext } from "react-hook-form";

export enum OrderType {
  DEFAULT = "DEFAULT",
  SECURE = "SECURE",
}

const SelectOrderType = () => {
  const { register } = useFormContext();

  return (
    <div className="flex gap-4 py-6">
      <div>
        <input
          {...register("type")}
          type="radio"
          value={OrderType.DEFAULT}
          id={OrderType.DEFAULT}
          defaultChecked
          className="hidden peer"
        />
        <label
          htmlFor={OrderType.DEFAULT}
          className="bg-gray-100 shadow text-primaryGray px-4 py-3 rounded-md peer-checked:bg-primaryBlack peer-checked:text-white"
        >
          Звичайний
        </label>
      </div>
      <div>
        <input
          {...register("type")}
          type="radio"
          value={OrderType.SECURE}
          id={OrderType.SECURE}
          className="hidden peer"
        />
        <label
          htmlFor={OrderType.SECURE}
          className="bg-gray-100 shadow text-primaryGray px-4 py-3 rounded-md peer-checked:bg-primaryBlack peer-checked:text-white"
        >
          Захищений
        </label>
      </div>
    </div>
  );
};

export default SelectOrderType;
