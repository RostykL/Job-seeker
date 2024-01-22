import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export interface FileProps extends File {
  preview: string;
}

export const useFileUpload = () => {
  const [files, setFiles] = useState<FileProps[]>([]);
  const { getInputProps, open } = useDropzone({
    accept: {
      "image/jpeg": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );

      setFiles(newFiles);
    },
  });

  const revokeObjectURL = (file: FileProps) =>
    URL.revokeObjectURL(file.preview);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return { revokeObjectURL, getInputProps, open, files };
};
