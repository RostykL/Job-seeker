// TODO: rewrite for multiple radio selects. Currently, only two available.
const RadioSelect = () => {
  return (
    <div className="flex gap-4 justify-center">
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
          className="bg-white shadow text-primaryGray px-4 py-2.5 rounded-xl peer-checked:bg-primaryBlack peer-checked:text-white"
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
          className="bg-white shadow text-primaryGray px-4 py-2.5 rounded-xl peer-checked:bg-primaryBlack peer-checked:text-white"
        >
          Захищений
        </label>
      </div>
    </div>
  );
};

export default RadioSelect;
