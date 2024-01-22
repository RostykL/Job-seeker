import { FileProps } from "src/shared/hooks/useFileUpload";

const FilePreviews = ({
  files,
  revokeObjectUrl,
}: {
  files: FileProps[];
  revokeObjectUrl: (file: FileProps) => void;
}) => {
  return (
    <>
      {files.map((file) => (
        <div className="overflow-hidden relative rounded-sm bg-gray-50 aspect-square w-full max-w-[100px] flex items-center justify-center snap-center shadow-md">
          <img
            src={file.preview}
            className="object-top object-cover rounded"
            onLoad={() => revokeObjectUrl(file)}
            alt={file.name}
          />
          <div className="absolute top-0 left-0 bg-opacity-40 bg-red-300 px-3 aspect-square flex items-center justify-center">
            -
          </div>
        </div>
      ))}
    </>
  );
};

export default FilePreviews;
