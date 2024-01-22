import { useTelegram } from "src/shared/hooks/useTelegram";
import FilePreviews from "src/UI/CreateOrderFields/UploadFilesFormField/components/FilePreviews";
import { useFileUpload } from "src/shared/hooks/useFileUpload";

const FilesList = () => {
  const { revokeObjectURL, getInputProps, open, files = [] } = useFileUpload();
  const { hapticFeedback } = useTelegram();

  const handleAddNewPhoto = () => {
    hapticFeedback();
    open();
  };

  return (
    <section className="overflow-x-auto flex gap-6 scrollable-image-view snap-x snap-mandatory p-4 h-full">
      <input {...getInputProps()} />
      <button
        onClick={handleAddNewPhoto}
        className="text-2xl text-gray-300 rounded-sm bg-gray-100 aspect-square w-full max-w-[100px] flex items-center justify-center snap-center shadow-md"
      >
        +
      </button>
      <FilePreviews files={files} revokeObjectUrl={revokeObjectURL} />
    </section>
  );
};

export default FilesList;
