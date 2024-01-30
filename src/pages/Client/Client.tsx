import { Outlet } from "react-router-dom";
import { useExpandPageContext } from "src/providers/ExpandPageProdiver";
import { ReactComponent as HamburgerIcon } from "src/assets/svg/hamburger.svg";

const Client = () => {
  const { togglePageExpand } = useExpandPageContext();

  const onPageShrink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    togglePageExpand();
  };

  return (
    <div className="h-full">
      <header className="flex flex-col gap-2 pt-4 pb-4">
        <div className="flex items-center gap-2 px-4">
          <button onClick={onPageShrink}>
            <HamburgerIcon />
          </button>
        </div>
      </header>
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Client;
