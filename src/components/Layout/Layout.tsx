import { Outlet } from "react-router-dom";
import NavigationSidebar from "src/components/Layout/NavigationSidebar";
import { useExpandPageContext } from "src/providers/ExpandPageProdiver";
import "./styles.css";

const Layout = () => {
  const { isPageExpanded, handleExpandPage } = useExpandPageContext();

  const expandPage = isPageExpanded
    ? "page-is-expanded"
    : "page-is-not-expanded";

  const expandNavigationSidebar = isPageExpanded
    ? "navigation-is-expanded"
    : "navigation-is-not-expanded";

  const blockPageInteractionIfPageIsNotExpanded = isPageExpanded
    ? ""
    : "pointer-events-none";

  return (
    <div className="h-[100vh] overflow-hidden relative">
      <div
        className={`h-full bg-primaryBlack absolute top-0 left-0 pt-6 ${expandNavigationSidebar}`}
      >
        <NavigationSidebar />
      </div>
      <div className="h-full flex justify-end items-center">
        <div
          className={`overflow-x-hidden w-full shadow-md ${expandPage}`}
          onClick={handleExpandPage}
        >
          <div
            className={`h-full w-full bg-white ${blockPageInteractionIfPageIsNotExpanded}`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
