import { Link } from "react-router-dom";
import { NavItem } from "src/constants/NavigationList";

interface NavigationItemProps extends NavItem {
  isActiveClass: string;
  onDoubleClick: () => void;
}

const NavigationItem = ({
  url,
  text,
  rightSideText,
  isActiveClass,
  onDoubleClick,
}: NavigationItemProps) => {
  return (
    <Link to={url} onDoubleClick={onDoubleClick}>
      <li
        className={`${isActiveClass} text-primaryGray py-4 px-4 pr-8 font-medium capitalize tracking-wide text-sm flex items-center justify-between`}
      >
        <div>{text}</div>
        {rightSideText()}
      </li>
    </Link>
  );
};

export default NavigationItem;
