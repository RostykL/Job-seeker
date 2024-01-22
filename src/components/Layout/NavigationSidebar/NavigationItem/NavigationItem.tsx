import { Link } from "react-router-dom";
import { NavItem } from "src/constants/NavigationList";
import { useTelegram } from "src/shared/hooks/useTelegram";

interface NavigationItemProps extends NavItem {
  isActive: boolean;
  queryParams?: string;
  onDoubleClick: () => void;
}

const NavigationItem = ({
  isActive,
  queryParams = "",
  rightSideText,
  text,
  url,
  onDoubleClick,
}: NavigationItemProps) => {
  const { hapticFeedback } = useTelegram();

  const isActiveClass = isActive
    ? "bg-black text-white font-bold"
    : "text-primaryGray";

  return (
    <Link
      to={{ pathname: url, search: queryParams }}
      onClick={() => hapticFeedback("light")}
      onDoubleClick={onDoubleClick}
    >
      <li
        className={`${isActiveClass} py-4 px-4 pr-8 capitalize tracking-wide text-sm flex items-center justify-between`}
      >
        <div>{text}</div>
        {rightSideText()}
      </li>
    </Link>
  );
};

export default NavigationItem;
