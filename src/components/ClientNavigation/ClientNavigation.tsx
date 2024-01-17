import { CLIENT_NAVIGATION_LIST } from "src/constants/NavigationList";
import NavigationItem from "src/components/Layout/NavigationSidebar/NavigationItem";
import { useHighlightNavigation } from "src/shared/hooks/useHighlightNavigation";
import { useExpandPageContext } from "src/providers/ExpandPageProdiver";
import { useTelegram } from "src/shared/hooks/useTelegram";

const ClientNavigation = () => {
  const isNavigationSelected = useHighlightNavigation();
  const { handleExpandPage } = useExpandPageContext();
  const { tg } = useTelegram();

  return (
    <ul className="mt-8 flex flex-col">
      {CLIENT_NAVIGATION_LIST.map(({ id, text, url, rightSideText }) => {
        const isActive = isNavigationSelected(url) ? "bg-white" : "";
        return (
          <NavigationItem
            key={id}
            id={id}
            url={url}
            text={text}
            rightSideText={rightSideText}
            isActiveClass={isActive}
            onDoubleClick={() => {
              tg.expand();
              handleExpandPage();
            }}
          />
        );
      })}
    </ul>
  );
};

export default ClientNavigation;
