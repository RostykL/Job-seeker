interface FormFieldSectionWrapperProps {
  description?: string;
  leftText: string;
  rightText?: string;
}
const FormFieldSectionHeader = ({
  description,
  leftText,
  rightText,
}: FormFieldSectionWrapperProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-center gap-4 text-xs">
        <h1 className="shrink-0 uppercase text-gray-400 tracking-wide text-base">
          {leftText}
        </h1>
        <div className="w-full h-[1px] bg-gray-300" />
        {rightText ? (
          <div className="shrink-0 uppercase text-gray-400 font-light tracking-wide">
            {rightText}
          </div>
        ) : null}
      </div>
      {description ? (
        <p className="text-gray-400 text-xs font-light">{description}</p>
      ) : null}
    </div>
  );
};

export default FormFieldSectionHeader;
