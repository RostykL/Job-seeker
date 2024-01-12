import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHighlightNavigation } from "src/shared/hooks/useHighlightNavigation";
import {
  CLIENT_NAVIGATION_LIST,
  FREELANCER_NAVIGATION_LIST,
} from "src/constants/NavigationList";
import { ROUTES } from "src/types/routes";
import NavigationItem from "src/components/Layout/NavigationSidebar/NavigationItem";
import {
  isUserRoleClient,
  isUserRoleFreelancer,
  UserRole,
} from "src/shared/userRole";
import { useExpandPageContext } from "src/providers/ExpandPageProdiver";
import { useTelegram } from "src/shared/hooks/useTelegram";
import axios from "axios";

const NavigationSidebar = () => {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.CLIENT);

  const navigate = useNavigate();
  const isNavigationSelected = useHighlightNavigation();
  const { handleExpandPage } = useExpandPageContext();
  const { tg, queryId } = useTelegram();

  const renderUserRoleNavigationList = () => {
    if (isUserRoleFreelancer(userRole)) {
      return FREELANCER_NAVIGATION_LIST.map(
        ({ id, text, url, rightSideText }) => {
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
        }
      );
    }

    return CLIENT_NAVIGATION_LIST.map(({ id, text, url, rightSideText }) => {
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
    });
  };

  const isClientSelected = isUserRoleClient(userRole)
    ? "text-primaryBlack bg-white rounded-tr-xl rounded-br-xl"
    : "text-primaryGray";

  const isFreelancerSelected = isUserRoleFreelancer(userRole)
    ? "text-primaryBlack bg-white rounded-tl-xl rounded-bl-xl"
    : "text-primaryGray";

  const onUserRoleChange = (userRole: UserRole) => {
    setUserRole(userRole);
  };

  const sendMessage = () => {
    axios
      .post("https://b197-5-199-232-89.ngrok-free.app/test-message", {
        channelId: queryId,
      })
      .then((res) => console.log(res, "res"));
  };

  return (
    <nav className="transition-all min-w-[200px]">
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

      <button onClick={sendMessage} className="p-4 bg-red-300 m-4">
        send message
      </button>
      <ul className="mt-8 flex flex-col">{renderUserRoleNavigationList()}</ul>
    </nav>
  );
};

export default NavigationSidebar;
