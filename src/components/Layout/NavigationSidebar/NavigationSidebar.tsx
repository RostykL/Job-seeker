import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/types/routes";
import {
  isUserRoleClient,
  isUserRoleFreelancer,
  UserRole,
} from "src/shared/userRole";
import { useHighlightNavigation } from "src/shared/hooks/useHighlightNavigation";
import FreelancerNavigation from "src/components/FreelancerNavigation";
import ClientNavigation from "src/components/ClientNavigation";

const NavigationSidebar = () => {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.CLIENT);

  const navigate = useNavigate();
  const isNavigationSelected = useHighlightNavigation();

  const isClientSelected =
    isNavigationSelected(ROUTES.CLIENT) && isUserRoleClient(userRole)
      ? "text-primaryBlack bg-white rounded-tr-xl rounded-br-xl"
      : "text-primaryGray";

  const isFreelancerSelected =
    isNavigationSelected(ROUTES.FREELANCER) || isUserRoleFreelancer(userRole)
      ? "text-primaryBlack bg-white rounded-tl-xl rounded-bl-xl"
      : "text-primaryGray";

  const onUserRoleChange = (userRole: UserRole) => {
    setUserRole(userRole);
  };

  return (
    <nav className="transition-all w-[270px]">
      <div className="flex items-center border-[1px] rounded-xl overflow-hidden mx-6">
        <div
          className={`${isClientSelected} px-4 py-3 text-xs uppercase font-medium`}
          onClick={() => {
            navigate(ROUTES.CLIENT);
            onUserRoleChange(UserRole.CLIENT);
          }}
        >
          Замовник
        </div>
        <div
          className={`${isFreelancerSelected} px-4 py-3 text-xs uppercase font-medium`}
          onClick={() => {
            navigate(ROUTES.FREELANCER);
            onUserRoleChange(UserRole.FREELANCER);
          }}
        >
          Виконавець
        </div>
      </div>
      {isUserRoleFreelancer(userRole) ? (
        <FreelancerNavigation />
      ) : (
        <ClientNavigation />
      )}
    </nav>
  );
};

export default NavigationSidebar;
