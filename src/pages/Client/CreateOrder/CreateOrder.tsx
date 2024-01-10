// Назва
// Що потрібно зробити (коротко)
//
// Опис
//
// Додати файл
//
// Дедлайн
//
// Захищений пост
//
// Теги
//
// Ціна (максимальна ціна, договірна ціна, ...)

import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import {
  DateCalendar,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "moment/locale/uk";

interface FileProps extends File {
  preview: string;
}

const CreateOrder = () => {
  const [files, setFiles] = useState<FileProps[]>([]);
  const { getInputProps, open } = useDropzone({
    accept: {
      "image/jpeg": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles((p) => [...newFiles, ...p]);
    },
  });

  const thumbs = files.map((file) => (
    <div>
      <div
        className="max-w-[120px] bg-white shadow-md rounded-xl p-2 flex flex-col"
        key={file.name}
      >
        <img
          src={file.preview}
          className="aspect-square object-cover bg-primaryBlack text-white text-[2em] flex items-center justify-center rounded-2xl"
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
        <div className="truncate mt-1">{file.name} hello</div>
      </div>
      <button className="bg-red-400 w-full rounded-xl text-white text-sm p-1 mt-2">
        видалити
      </button>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div>
      <header className="flex mb-4">
        <div className="shadow flex-1 text-center my-3 p-4 bg-black text-white uppercase text-sm font-bold">
          Створення
        </div>
        <div className="flex-1 text-center my-3 p-4 uppercase text-sm font-bold">
          Огляд
        </div>
      </header>

      <form className="flex flex-col gap-6">
        <div className="px-4 flex flex-col gap-1">
          <input
            type="text"
            placeholder="Назва"
            className="bg-white shadow-sm w-full py-3 px-4 rounded-xl placeholder:text-primaryGray"
          />
          <p className="px-2.5 text-xs text-gray-500">
            (!) Що потрібно зробити?(коротко)
          </p>
        </div>

        <div className="px-4 flex flex-col gap-1">
          <textarea
            cols={5}
            rows={2}
            placeholder="Опис"
            className="bg-white shadow-sm py-3 px-4 rounded-xl placeholder:text-primaryGray"
          />
          <p className="px-2.5 text-xs text-gray-500">
            (!) Опишіть, що вам потрібно зробити?
          </p>
        </div>

        <div className="px-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="agreedOnPrice" />
            <label htmlFor="agreedOnPrice">Договірна</label>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="number"
              placeholder="Ціна (грн)"
              className="bg-white shadow-sm w-full py-3 px-4 rounded-xl placeholder:text-primaryGray"
            />
            <p className="px-2.5 text-xs text-gray-500">
              (!) Скільки ви готові заплатити за це замовлення?
            </p>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-1">
          <aside className="text-sm text-blue-500 mb-2">
            <span className="bg-blue-200 px-2 py-1 rounded-full">
              #tag1
              <button className="ml-1 text-red-400 w-[10px] text-sx rounded-full text-center">
                x
              </button>
            </span>
          </aside>
          <div className="flex flex-col gap-1">
            <input
              type="number"
              placeholder="Додайте теги"
              className="bg-white shadow-sm w-full py-3 px-4 rounded-xl placeholder:text-primaryGray"
            />
            <p className="px-2.5 text-xs text-gray-500">
              (!) Будь ласка, вводьте теги по одному. Вони допоможуть краще
              знайти виконавців для цього замовлення.
            </p>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-4">
          <h1 className="text-primaryBlack font-bold text-lg uppercase">
            Тип Замовлення:
          </h1>
          <div className="flex justify-evenly">
            <div className="bg-white shadow text-primaryGray px-4 py-2 rounded-xl">
              Звичайний
            </div>
            <div className="bg-primaryBlack shadow text-white px-4 py-2 rounded-xl">
              Захищений
            </div>
          </div>
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
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

        <div className="h-[400px]"></div>

        {/*  END  */}
      </form>
    </div>
  );
};

export default CreateOrder;
