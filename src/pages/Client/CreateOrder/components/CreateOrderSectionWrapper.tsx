const CreateOrderSectionWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={`w-full px-4 ${className}`}>{children}</section>;
};

export default CreateOrderSectionWrapper;
