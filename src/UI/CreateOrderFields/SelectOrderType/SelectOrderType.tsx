const SelectOrderType = () => {
  return (
    <div className="flex gap-4 py-6">
      <div>
        <input
          type="radio"
          value="value1"
          name="group1"
          id="first"
          defaultChecked
          className="hidden peer"
        />
        <label
          htmlFor="first"
          className="bg-gray-100 shadow text-primaryGray px-4 py-3 rounded-md peer-checked:bg-primaryBlack peer-checked:text-white"
        >
          Звичайний
        </label>
      </div>
      <div>
        <input
          type="radio"
          value="value2"
          name="group1"
          id="second"
          className="hidden peer"
        />
        <label
          htmlFor="second"
          className="bg-gray-100 shadow text-primaryGray px-4 py-3 rounded-md peer-checked:bg-primaryBlack peer-checked:text-white"
        >
          Захищений
        </label>
      </div>
    </div>
  );
};

export default SelectOrderType;
