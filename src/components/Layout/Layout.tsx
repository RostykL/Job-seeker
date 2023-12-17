import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { isPathnameDefault } from "src/shared/routes/isPathnameDefault";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => navigate(-1);

  return (
    <div>
      {isPathnameDefault(location.pathname) ? null : (
        <div
          className="max-w-full p-4 text-[14px] uppercase tracking-wide"
          onClick={handleGoBack}
        >
          back
        </div>
      )}
      <hr />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
