import { useEffect } from "react";
import { useDropzone } from "react-dropzone";

export interface FileProps extends File {
  preview: string;
}

export const useFileUpload = ({
  files,
  handleFilesChange,
}: {
  files: FileProps[];
  handleFilesChange: (files: FileProps[]) => void;
}) => {
  const { getInputProps, open } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      const acceptedFilesWithoutDuplicates = acceptedFiles.filter(
        (acceptedFile) =>
          !files.some((file) => acceptedFile.name === file.name),
      );

      const newFiles = acceptedFilesWithoutDuplicates.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );

      handleFilesChange([...files, ...newFiles].slice(0, 6));
    },
  });

  const revokeObjectURL = (file: FileProps) =>
    URL.revokeObjectURL(file.preview);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return { revokeObjectURL, getInputProps, open };
};
