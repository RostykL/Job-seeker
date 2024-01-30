import "moment/locale/uk";
import "./styles.css";
import UploadFilesFormField from "src/pages/Client/CreateOrder/components/UploadFilesFormField";
import React, { useRef } from "react";
import { useTelegram } from "src/shared/hooks/useTelegram";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectOrderType, {
  OrderType,
} from "src/pages/Client/CreateOrder/components/SelectOrderType";
import Checkbox from "src/components/Checkbox";
import { FileProps } from "src/shared/hooks/useFileUpload";
import { isOrderTypeDefault } from "src/shared/order/orderType";
import CreateOrderField from "src/pages/Client/CreateOrder/components/CreateOrderField";
import CreateOrderSectionWrapper from "src/pages/Client/CreateOrder/components/CreateOrderSectionWrapper";
import FormFieldSectionHeader from "src/pages/Client/CreateOrder/components/FormFieldSectionHeader";
import CreateOrderTextArea from "src/pages/Client/CreateOrder/components/CreateOrderTextArea";
import { useCreateOrderMutation } from "src/store/features/order/order";

interface CreateOrderFormFields {
  description: string;
  price: number;
  title: string;
  type: OrderType;
  files: FileProps[];
  userAgreement?: boolean;
}

const validationSchema = Yup.object({
  description: Yup.string().required("Required"),
  price: Yup.number()
    .typeError("Amount must be a number")
    .min(0, "Ціна повинна бути позитивна :)")
    .required("Required"),
  title: Yup.string().required("Required"),
  type: Yup.mixed<OrderType>().oneOf(Object.values(OrderType)).required(),
  files: Yup.mixed<FileProps[]>().default([]),
  userAgreement: Yup.boolean().when("type", (type: unknown) => {
    if (isOrderTypeDefault(type as OrderType)) {
      return Yup.boolean().required();
    }
    return Yup.boolean();
  }),
});

const CreateOrder = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [createOrder] = useCreateOrderMutation();

  const methods = useForm<CreateOrderFormFields>({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
    defaultValues: {
      description: "",
      price: 0,
      title: "",
      type: OrderType.DEFAULT,
      files: [],
      userAgreement: true,
    },
  });

  const type = methods.watch("type");
  const userAgreement = methods.watch("userAgreement");

  const { hapticFeedback, telegramUserId, telegramUserFullName } =
    useTelegram();
  const handleCreateOrderSubmit = async (data: CreateOrderFormFields) => {
    if (!telegramUserId) {
      alert("no telegram user id");
      return;
    }

    try {
      const { title, description } = data;
      await createOrder({
        title,
        description,
        userFullname: telegramUserFullName,
        userTelegramId: telegramUserId,
      });
      methods.reset();
    } catch (error) {
      alert("Error occurred");
    }
    hapticFeedback("heavy");
  };

  // TODO: rewrite userAgreement checkbox

  return (
    <div className="pb-4 flex flex-col gap-10 h-[2000px] bg-red-300">
      <input type="text" placeholder={"hello"} />
      <input type="text" placeholder={"hello"} />
      <input type="text" placeholder={"hello"} />
      <input type="text" placeholder={"hello"} />
      <input type="text" placeholder={"hello"} />
      <input type="text" placeholder={"hello"} />
      <input type="text" placeholder={"hello"} />
      <input type="text" placeholder={"hello"} />
      {/*<FormProvider {...methods}>*/}
      {/*  <form*/}
      {/*    className="flex flex-col gap-4 h-full bg-green-500"*/}
      {/*    onSubmit={methods.handleSubmit(handleCreateOrderSubmit)}*/}
      {/*  >*/}
      {/*    <UploadFilesFormField />*/}
      {/*    <CreateOrderSectionWrapper>*/}
      {/*      <FormFieldSectionHeader leftText="Виберіть Тип Замовлення" />*/}
      {/*      <SelectOrderType />*/}
      {/*      {isOrderTypeDefault(type) ? (*/}
      {/*        <Checkbox*/}
      {/*          htmlFor="userAgreement"*/}
      {/*          {...methods.register("userAgreement")}*/}
      {/*          defaultChecked={userAgreement}*/}
      {/*          label="Погоджуюся, що всю відповідальність за втрачені кошти беру на себе."*/}
      {/*        />*/}
      {/*      ) : null}*/}
      {/*    </CreateOrderSectionWrapper>*/}
      {/*    <CreateOrderSectionWrapper>*/}
      {/*      <FormFieldSectionHeader*/}
      {/*        leftText="Ціна(грн)"*/}
      {/*        description="Скільки ви готові заплатити за цю роботу?"*/}
      {/*      />*/}
      {/*      <CreateOrderField*/}
      {/*        name="price"*/}
      {/*        placeholder="$$$"*/}
      {/*        type="number"*/}
      {/*        pattern="\d*"*/}
      {/*        min={0}*/}
      {/*        wrapperClassName="flex flex-col gap-1 py-4"*/}
      {/*      />*/}
      {/*    </CreateOrderSectionWrapper>*/}

      {/*    <CreateOrderSectionWrapper>*/}
      {/*      <FormFieldSectionHeader*/}
      {/*        leftText="Назва Роботи"*/}
      {/*        description="Опишіть коротко, що потрібно зробити"*/}
      {/*      />*/}
      {/*      <CreateOrderField*/}
      {/*        name="title"*/}
      {/*        placeholder="Назва"*/}
      {/*        wrapperClassName="flex flex-col gap-1 py-4"*/}
      {/*        onFocus={(e) => {*/}
      {/*          ref.current?.scrollIntoView({ behavior: "smooth" });*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    </CreateOrderSectionWrapper>*/}
      {/*    <CreateOrderSectionWrapper>*/}
      {/*      <FormFieldSectionHeader*/}
      {/*        leftText="Детальний опис"*/}
      {/*        description="Опишіть, що вам потрібно зробити?"*/}
      {/*      />*/}
      {/*      <CreateOrderTextArea*/}
      {/*        cols={5}*/}
      {/*        name="description"*/}
      {/*        placeholder="Опис"*/}
      {/*        rows={2}*/}
      {/*        wrapperClassName="py-4 flex flex-col gap-1"*/}
      {/*      />*/}
      {/*    </CreateOrderSectionWrapper>*/}
      {/*    <button*/}
      {/*      type="submit"*/}
      {/*      className="shadow-md bg-green-400 bg-opacity-70 py-4 uppercase text-white font-bold tracking-widest"*/}
      {/*      onClick={() => hapticFeedback()}*/}
      {/*    >*/}
      {/*      Створити замовлення*/}
      {/*    </button>*/}
      {/*  </form>*/}
      {/*</FormProvider>*/}
    </div>
  );
};

export default CreateOrder;
