import { CLIENT_NAVIGATION_LIST } from "src/constants/NavigationList";
import NavigationItem from "src/components/Layout/NavigationSidebar/NavigationItem";
import { useExpandPageContext } from "src/providers/ExpandPageProdiver";
import { useTelegram } from "src/shared/hooks/useTelegram";
import { UserRole } from "src/shared/userRole";

const ClientNavigation = () => {
  const { handleExpandPage } = useExpandPageContext();
  const { tg } = useTelegram();

  return (
    <ul className="mt-8 flex flex-col">
      {CLIENT_NAVIGATION_LIST.map(({ id, text, url, rightSideText }) => (
        <NavigationItem
          key={id}
          id={id}
          queryParams={`?role=${UserRole.CLIENT}`}
          rightSideText={rightSideText}
          text={text}
          url={url}
          onDoubleClick={() => {
            tg.expand();
            handleExpandPage();
          }}
        />
      ))}
    </ul>
  );
};

export default ClientNavigation;
