import FilesList from "src/pages/Client/CreateOrder/components/UploadFilesFormField/components/FilesList";
import { useFormContext } from "react-hook-form";
import { FileProps } from "src/shared/hooks/useFileUpload";
import FormFieldSectionHeader from "src/pages/Client/CreateOrder/components/FormFieldSectionHeader";

const UploadFilesFormField = () => {
  const { setValue, watch } = useFormContext();
  const files = watch("files") || [];

  const handleFilesChange = (filesList: FileProps[]) => {
    setValue("files", filesList);
  };

  return (
    <section className="w-full p-4">
      <FormFieldSectionHeader
        leftText="Додайте фото"
        rightText={`Додано: ${files.length} / 6`}
      />
      <FilesList files={files} handleFilesChange={handleFilesChange} />
    </section>
  );
};

export default UploadFilesFormField;
