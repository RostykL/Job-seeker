import { useLocation } from "react-router-dom";
import { ROUTES } from "src/types/routes";

export const useHighlightNavigation = () => {
  const location = useLocation();
  const currentPagePathname = location.pathname;

  const isNavigationSelected = (navigationUrl: ROUTES) =>
    currentPagePathname === navigationUrl;

  return isNavigationSelected;
};
