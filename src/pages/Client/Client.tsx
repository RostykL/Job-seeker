import { Outlet } from "react-router-dom";
import { useExpandPageContext } from "src/providers/ExpandPageProdiver";
import { ReactComponent as HamburgerIcon } from "src/assets/svg/hamburger.svg";

const Client = () => {
  const { togglePageExpand } = useExpandPageContext();

  const onPageShrink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    togglePageExpand();
  };

  // TODO: move out box-shadow and make only bottom shadow
  return (
    <div className="bg-gray-100">
      <header className="flex flex-col gap-2 pt-4 pb-4">
        <div className="flex items-center gap-2 px-4">
          <button onClick={onPageShrink}>
            <HamburgerIcon />
          </button>
        </div>
        {/*<div className="flex items-center">*/}
        {/*  <div className="flex-1 bg-white text-center px-6 py-3 font-medium text-xs uppercase border-b-[3px] border-blue-200">*/}
        {/*    step*/}
        {/*  </div>*/}
        {/*  <div className="flex-1 text-center px-6 py-3 font-medium text-xs uppercase">*/}
        {/*    step*/}
        {/*  </div>*/}
        {/*  <div className="flex-1 text-center px-6 py-3 font-medium text-xs uppercase">*/}
        {/*    step*/}
        {/*  </div>*/}
        {/*</div>*/}
      </header>
      <Outlet />
    </div>
  );
};

export default Client;
