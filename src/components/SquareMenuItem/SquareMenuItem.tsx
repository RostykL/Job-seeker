import { NavLink } from "react-router-dom";

interface SquareMenuItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
  pathname: string;
  title: string;
}

const SquareMenuItem = ({
  Icon,
  description,
  pathname,
  title,
}: SquareMenuItemProps) => {
  return (
    <NavLink
      to={pathname}
      className="rounded-lg bg-green-100 active:bg-green-300 aspect-square flex justify-center items-center flex-col gap-1"
    >
      <div className="flex items-center gap-2">
        <>
          <Icon /> <span className="uppercase tracking-wider">{title}</span>
        </>
      </div>
      <div className="text-[10px] opacity-40 max-w-[80%]">{description}</div>
    </NavLink>
  );
};

export default SquareMenuItem;
