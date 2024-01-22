import "moment/locale/uk";
import "./styles.css";
import UploadFilesFormField from "src/UI/CreateOrderFields/UploadFilesFormField";
import React from "react";
import Input from "src/components/Input";
import FormFieldSectionHeader from "src/UI/CreateOrderFields/FormFieldSectionHeader";
import SelectOrderType from "src/UI/CreateOrderFields/SelectOrderType";
import Textarea from "src/components/Textarea";
import { useTelegram } from "src/shared/hooks/useTelegram";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";

const validationSchema = Yup.object({
  description: Yup.string().required("Required"),
  files: Yup.array().required("Required"),
  price: Yup.number().required("Required"),
  title: Yup.string().required("Required"),
});

const CreateOrder = () => {
  const methods = useForm();

  const { hapticFeedback } = useTelegram();
  const handleCreateOrderSubmit = (data) => {
    console.log("here");
  };

  return (
    <div className="relative h-full pb-4">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4"
          onSubmit={methods.handleSubmit(handleCreateOrderSubmit)}
        >
          <UploadFilesFormField />

          <section className="w-full px-4">
            <FormFieldSectionHeader
              leftText="Ціна"
              description="Скільки ви готові заплатити за цю роботу?"
            />
            <Input
              {...methods.register("price")}
              placeholder="$$$"
              wrapperClassName="flex flex-col gap-1 py-4"
            />
          </section>

          <section className="w-full px-4">
            <FormFieldSectionHeader
              leftText="Назва Роботи"
              description="Опишіть коротко, що потрібно зробити"
            />
            <Input
              {...methods.register("title")}
              placeholder="Назва"
              wrapperClassName="flex flex-col gap-1 py-4"
            />
          </section>

          <section className="w-full px-4">
            <FormFieldSectionHeader
              leftText="Детальний опис"
              description="Опишіть, що вам потрібно зробити?"
            />
            <Textarea
              cols={5}
              {...methods.register("description")}
              placeholder="Опис"
              rows={2}
              wrapperClassName="py-4 flex flex-col gap-1"
            />
          </section>

          <section className="w-full px-4">
            <FormFieldSectionHeader leftText="Виберіть Тип Замовлення" />
            <SelectOrderType />
          </section>

          <button
            type="submit"
            className="shadow-md bg-green-400 bg-opacity-70 py-4 uppercase text-white font-bold tracking-widest"
            onClick={() => hapticFeedback()}
          >
            Створити замовлення
          </button>

          {/*<div className="px-4 flex flex-col gap-2">*/}
          {/*  <Checkbox htmlFor="agreedOnPrice" label="Договірна" />*/}
          {/*  <Input*/}
          {/*    description="(!) Скільки ви готові заплатити за це замовлення?"*/}
          {/*    pattern="\d*"*/}
          {/*    placeholder="Ціна"*/}
          {/*    type="number"*/}
          {/*    wrapperClassName="flex flex-col gap-1"*/}
          {/*  />*/}
          {/*</div>*/}

          {/*<MultiSelect*/}
          {/*  description="(!) Введіть 1 - 3 теги. Вони допоможуть краще*/}
          {/*      знайти виконавців для цього замовлення."*/}
          {/*  wrapperClassName="px-4 flex flex-col gap-1"*/}
          {/*/>*/}
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateOrder;
