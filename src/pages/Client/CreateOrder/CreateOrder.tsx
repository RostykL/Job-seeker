import {
  DateCalendar,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "moment/locale/uk";
import { useFileUpload } from "src/shared/hooks/useFileUpload";
import Input from "src/components/Input";
import Textarea from "src/components/Textarea";
import Checkbox from "src/components/Checkbox";
import MultiSelect from "src/components/MultiSelect";
import RadioSelect from "src/components/RadioSelect";

const CreateOrder = () => {
  const { revokeObjectURL, getInputProps, open, files } = useFileUpload();

  const thumbs = files.map((file) => (
    <div>
      <div
        className="max-w-[120px] bg-white shadow-md rounded-xl p-2 flex flex-col"
        key={file.name}
      >
        <img
          src={file.preview}
          className="aspect-square object-cover bg-primaryBlack text-white text-[2em] flex items-center justify-center rounded-2xl"
          onLoad={() => revokeObjectURL(file)}
        />
        <div className="truncate mt-1">{file.name} hello</div>
      </div>
      <button className="bg-red-400 w-full rounded-xl text-white text-sm p-1 mt-2">
        видалити
      </button>
    </div>
  ));

  const handleCreateOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("here");
  };

  return (
    <div className={"relative"}>
      <header className="flex mb-4">
        <div className="shadow flex-1 text-center my-3 p-4 bg-black text-white uppercase text-sm font-bold">
          Створення
        </div>
        <div className="flex-1 text-center my-3 p-4 uppercase text-sm font-bold">
          Огляд
        </div>
      </header>

      <form className="flex flex-col gap-6" onSubmit={handleCreateOrderSubmit}>
        <Input
          description="(!) Що потрібно зробити?(коротко)"
          placeholder="Назва"
          wrapperClassName="px-4 flex flex-col gap-1"
        />

        <Textarea
          cols={5}
          description="(!) Опишіть, що вам потрібно зробити?"
          placeholder="Опис"
          rows={2}
          wrapperClassName="px-4 flex flex-col gap-1"
        />

        <div className="px-4 flex flex-col gap-2">
          <Checkbox htmlFor="agreedOnPrice" label="Договірна" />
          <Input
            description="(!) Скільки ви готові заплатити за це замовлення?"
            placeholder="Ціна"
            wrapperClassName="flex flex-col gap-1"
          />
        </div>

        <MultiSelect
          description="(!) Введіть 1 - 3 теги. Вони допоможуть краще
              знайти виконавців для цього замовлення."
          wrapperClassName="px-4 flex flex-col gap-1"
        />

        <div className="px-4 flex flex-col gap-4">
          <h1 className="text-primaryBlack font-bold text-lg uppercase">
            Тип Замовлення:
          </h1>
          <RadioSelect />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="px-4 text-primaryBlack font-bold text-lg uppercase">
            Додати файли:
          </h1>
          <div className="flex flex-col items-center gap-2 w-full">
            <input {...getInputProps()} />

            {thumbs.length > 0 ? (
              <aside className="flex gap-6 overflow-x-auto p-4 bg-blue-100 w-full max-w-full">
                {thumbs}
              </aside>
            ) : null}

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                open();
              }}
              className="bg-primaryBlack text-white text-xs font-medium h-[35px] rounded-2xl w-full max-w-[calc(100%-2em)] uppercase"
            >
              Додати файли +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="px-4 text-primaryBlack font-bold text-lg uppercase">
            Виберіть дату та час дедлайну:
          </h1>
          <LocalizationProvider adapterLocale="uk" dateAdapter={AdapterMoment}>
            <div className="flex flex-col items-center justify-center">
              <DateCalendar />
              <TimePicker label="Виберіть час" />
            </div>
          </LocalizationProvider>
        </div>

        <button
          type="button"
          className="uppercase bg-black shadow-2xl rounded-2xl py-3 text-white font-medium tracking-wide"
        >
          Створити Замовлення
        </button>
      </form>
    </div>
  );
};

export default CreateOrder;
