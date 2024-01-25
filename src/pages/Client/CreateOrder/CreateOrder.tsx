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
import { yupResolver } from "@hookform/resolvers/yup";
import { OrderType } from "src/UI/CreateOrderFields/SelectOrderType/SelectOrderType";
import Checkbox from "src/components/Checkbox";
import { FileProps } from "src/shared/hooks/useFileUpload";
import { isOrderTypeDefault } from "src/shared/order/orderType";

interface CreateOrderFormFields {
  description: string;
  price: number;
  title: string;
  type: OrderType;
  files: FileProps[];
}

const validationSchema = Yup.object({
  description: Yup.string().required("Required"),
  price: Yup.number()
    .typeError("Amount must be a number")
    .min(0, "Too little")
    .required("Required"),
  title: Yup.string().required("Required"),
  type: Yup.mixed<OrderType>().oneOf(Object.values(OrderType)).required(),
  files: Yup.mixed<FileProps[]>().default([]),
});

const CreateOrder = () => {
  const methods = useForm<CreateOrderFormFields>({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
    defaultValues: {
      description: "",
      price: 0,
      title: "",
      type: OrderType.DEFAULT,
      files: [],
    },
  });

  const type = methods.watch("type");

  const { hapticFeedback } = useTelegram();
  const handleCreateOrderSubmit = (data: CreateOrderFormFields) => {
    console.log(data, "here");
    hapticFeedback("heavy");
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
            <FormFieldSectionHeader leftText="Виберіть Тип Замовлення" />
            <SelectOrderType />
            {isOrderTypeDefault(type) ? (
              <Checkbox
                htmlFor="userAgreement"
                label="Погоджуюся, що всю відповідальність за втрачені гроші беру на себе."
              />
            ) : null}
          </section>

          <section className="w-full px-4">
            <FormFieldSectionHeader
              leftText="Ціна"
              description="Скільки ви готові заплатити за цю роботу?"
            />
            <Input
              name="price"
              placeholder="$$$"
              type="number"
              pattern="\d*"
              wrapperClassName="flex flex-col gap-1 py-4"
            />
          </section>

          <section className="w-full px-4">
            <FormFieldSectionHeader
              leftText="Назва Роботи"
              description="Опишіть коротко, що потрібно зробити"
            />
            <Input
              name="title"
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
              name="description"
              placeholder="Опис"
              rows={2}
              wrapperClassName="py-4 flex flex-col gap-1"
            />
          </section>

          <button
            type="submit"
            className="shadow-md bg-green-400 bg-opacity-70 py-4 uppercase text-white font-bold tracking-widest"
            onClick={() => hapticFeedback()}
          >
            Створити замовлення
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateOrder;
