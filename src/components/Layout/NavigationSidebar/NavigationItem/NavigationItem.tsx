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
  leftIcon,
  onDoubleClick,
}: NavigationItemProps) => {
  const { hapticFeedback } = useTelegram();

  const isLinkActive = (isActive: boolean) =>
    isActive
      ? "bg-gray-100 duration-[0.3s] text-black font-medium"
      : "text-primaryGray bg-none";

  return (
    <NavLink
      to={{ pathname: url, search: queryParams }}
      onClick={() => hapticFeedback("light")}
      onDoubleClick={onDoubleClick}
      className={({ isActive, isTransitioning }) =>
        `${isLinkActive(isActive || isTransitioning)} rounded-xl mx-3`
      }
    >
      <li className="select-none py-3 px-4 capitalize tracking-wide text-sm flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-4 mr-4">{leftIcon}</div>
          <div>{text}</div>
        </div>
        {rightSideText()}
      </li>
    </NavLink>
  );
};

export default NavigationItem;
