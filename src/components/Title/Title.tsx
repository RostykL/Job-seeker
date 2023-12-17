interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="text-xl uppercase">{children}</h1>;
};

export default Title;
