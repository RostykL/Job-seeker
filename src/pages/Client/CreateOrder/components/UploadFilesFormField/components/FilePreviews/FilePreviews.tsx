import { FileProps } from "src/shared/hooks/useFileUpload";

const FilePreviews = ({
  files,
  revokeObjectUrl,
  onRemoveFile,
}: {
  files: FileProps[];
  revokeObjectUrl: (file: FileProps) => void;
  onRemoveFile: (fileId: string) => void;
}) => {
  if (files.length === 0) {
    return (
      <div className="flex items-center justify-center uppercase text-[10px] font-bold text-gray-500">
        + Додайте при потребі файли.
      </div>
    );
  }

  return (
    <>
      {files.map((file) => (
        <div
          key={file.preview}
          className="flex-[0_0_100px] overflow-hidden relative rounded-sm bg-gray-50 aspect-square w-full max-w-[100px] flex items-center justify-center snap-center shadow-md"
        >
          <img
            src={file.preview}
            className="object-top object-cover rounded"
            onLoad={() => revokeObjectUrl(file)}
            alt={file.name}
          />
          <div
            className="absolute top-0 left-0 bg-black px-3 aspect-square flex items-center justify-center"
            onClick={() => onRemoveFile(file.preview)}
          >
            <div className="w-[6px] h-[2px] bg-white" />
          </div>
        </div>
      ))}
    </>
  );
};

export default FilePreviews;
