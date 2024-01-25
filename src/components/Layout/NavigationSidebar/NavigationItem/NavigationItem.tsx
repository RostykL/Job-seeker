import { NavLink } from "react-router-dom";
import { NavItem } from "src/constants/NavigationList";
import { useTelegram } from "src/shared/hooks/useTelegram";

interface NavigationItemProps extends NavItem {
  queryParams?: string;
  onDoubleClick: () => void;
}

const NavigationItem = ({
  queryParams = "",
  rightSideText,
  text,
  url,
  onDoubleClick,
}: NavigationItemProps) => {
  const { hapticFeedback } = useTelegram();

  return (
    <NavLink
      to={{ pathname: url, search: queryParams }}
      onClick={() => hapticFeedback("light")}
      onDoubleClick={onDoubleClick}
      className={({ isActive, isTransitioning }) =>
        isActive || isTransitioning
          ? "bg-black text-white font-bold"
          : "text-primaryGray"
      }
    >
      <li className="select-none py-4 px-4 pr-8 capitalize tracking-wide text-sm flex items-center justify-between">
        <div>{text}</div>
        {rightSideText()}
      </li>
    </NavLink>
  );
};

export default NavigationItem;
