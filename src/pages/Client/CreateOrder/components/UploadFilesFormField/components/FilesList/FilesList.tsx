import { useTelegram } from "src/shared/hooks/useTelegram";
import FilePreviews from "src/pages/Client/CreateOrder/components/UploadFilesFormField/components/FilePreviews";
import { FileProps, useFileUpload } from "src/shared/hooks/useFileUpload";

export interface FilesListProps {
  files: FileProps[];
  handleFilesChange: (files: FileProps[]) => void;
}

const FilesList = ({ files, handleFilesChange }: FilesListProps) => {
  const { revokeObjectURL, getInputProps, open } = useFileUpload({
    files,
    handleFilesChange,
  });
  const { hapticFeedback } = useTelegram();

  const handleAddNewPhoto = () => {
    hapticFeedback();
    open();
  };

  const handleFileRemove = (filePreview: string) => {
    hapticFeedback("heavy");
    handleFilesChange(files.filter((file) => file.preview !== filePreview));
  };

  return (
    <section className="overflow-x-auto flex gap-6 scrollable-image-view snap-x snap-mandatory p-4 h-full min-h-[100px]">
      <input {...getInputProps()} />
      <button
        type="button"
        onClick={handleAddNewPhoto}
        className="flex-[0_0_100px] text-2xl text-gray-300 rounded-sm bg-gray-100 aspect-square w-full max-w-[100px] flex items-center justify-center snap-center shadow-md"
      >
        +
      </button>
      <FilePreviews
        files={files}
        revokeObjectUrl={revokeObjectURL}
        onRemoveFile={handleFileRemove}
      />
    </section>
  );
};

export default FilesList;
