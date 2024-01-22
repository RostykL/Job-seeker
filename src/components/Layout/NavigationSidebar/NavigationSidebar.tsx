import { useSearchParams } from "react-router-dom";
import FreelancerNavigation from "src/components/FreelancerNavigation";
import ClientNavigation from "src/components/ClientNavigation";
import { UserRole } from "src/shared/userRole";
import { useEffect } from "react";
import { useTelegram } from "src/shared/hooks/useTelegram";

const NavigationSidebar = () => {
  const { hapticFeedback } = useTelegram();

  const [searchParams, setSearchParams] = useSearchParams();
  const useRole = searchParams.get("role");

  const isClientSelected =
    useRole === UserRole.CLIENT
      ? "text-white bg-black rounded-tr-xl rounded-br-xl"
      : "text-black";

  const isFreelancerSelected =
    useRole === UserRole.FREELANCER
      ? "text-white bg-black rounded-tl-xl rounded-bl-xl"
      : "text-black";

  useEffect(() => {
    searchParams.set("role", UserRole.CLIENT);
    setSearchParams(searchParams);
  }, []);

  return (
    <nav className="transition-all w-[270px]">
      <div className="flex items-center border-[1px] rounded-xl overflow-hidden mx-6">
        <div
          className={`${isClientSelected} px-4 py-3 text-xs uppercase font-medium`}
          onClick={() => {
            searchParams.set("role", UserRole.CLIENT);
            setSearchParams(searchParams);
          }}
        >
          Замовник
        </div>
        <div
          className={`${isFreelancerSelected} px-4 py-3 text-xs uppercase font-medium`}
          onClick={() => {
            searchParams.set("role", UserRole.FREELANCER);
            setSearchParams(searchParams);
          }}
        >
          Виконавець
        </div>
      </div>
      {useRole === UserRole.FREELANCER ? (
        <FreelancerNavigation />
      ) : (
        <ClientNavigation />
      )}
    </nav>
  );
};

export default NavigationSidebar;
