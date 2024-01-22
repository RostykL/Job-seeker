import FilesList from "src/UI/CreateOrderFields/UploadFilesFormField/components/FilesList";
import FormFieldSectionHeader from "src/UI/CreateOrderFields/FormFieldSectionHeader";

const UploadFilesFormField = () => {
  return (
    <section className="w-full p-4">
      <FormFieldSectionHeader
        leftText="Додайте фото"
        rightText="Додано: 0 / 6"
      />
      <FilesList />
    </section>
  );
};

export default UploadFilesFormField;
