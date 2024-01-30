import { RegisterOptions, useFormContext } from "react-hook-form";

export enum OrderType {
  DEFAULT = "DEFAULT",
  SECURE = "SECURE",
}

const SelectOrderType = () => {
  const { register, setValue } = useFormContext();

  // TODO: maybe rewrite this because it adds layer of complexity to the code base
  const handleOrderTypeRegisterWithUserAgreement = (
    isUserAgreementForSelectedOrderType: boolean,
    options?: RegisterOptions,
  ) => {
    const { onChange } = register("type");

    return {
      ...register("type", options),
      onChange: async (event: { target: any; type?: any }) => {
        await onChange(event);
        setValue("userAgreement", isUserAgreementForSelectedOrderType);
      },
    };
  };

  return (
    <div className="flex gap-4 py-6">
      <div>
        <input
          {...handleOrderTypeRegisterWithUserAgreement(true)}
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
          {...handleOrderTypeRegisterWithUserAgreement(false)}
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
