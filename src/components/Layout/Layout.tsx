import { Outlet } from "react-router-dom";
import { useExpandPageContext } from "src/providers/ExpandPageProdiver";
import "./styles.css";
import NavigationSidebar from "src/components/Layout/NavigationSidebar";

const Layout = () => {
  const { isPageExpanded, handleExpandPage } = useExpandPageContext();

  // TODO: maybe remove blur
  const expandPage = isPageExpanded
    ? "page-is-expanded blur-[0px]"
    : "page-is-not-expanded blur-[0px]";

  const expandNavigationSidebar = isPageExpanded
    ? "navigation-is-expanded blur-[10px]"
    : "navigation-is-not-expanded blur-[0px]";

  const blockPageInteractionIfPageIsNotExpanded = isPageExpanded
    ? ""
    : "pointer-events-none";

  return (
    <div className="bg-white h-full overflow-hidden relative">
      <div
        className={`h-full bg-white shadow-2xl shadow-gray-400 absolute top-0 left-0 pt-6 ${expandNavigationSidebar}`}
      >
        <NavigationSidebar />
      </div>
      <div className="h-full flex justify-end items-center">
        <div
          className={`overflow-x-hidden w-full h-full shadow-2xl shadow-gray-400 ${expandPage}`}
          onClick={handleExpandPage}
        >
          <div
            className={`bg-white h-full w-full duration-[3s] ${blockPageInteractionIfPageIsNotExpanded}`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
