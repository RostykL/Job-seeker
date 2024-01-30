import { FREELANCER_NAVIGATION_LIST } from "src/constants/NavigationList";
import NavigationItem from "src/components/Layout/NavigationSidebar/NavigationItem";
import { useExpandPageContext } from "src/providers/ExpandPageProdiver";
import { useTelegram } from "src/shared/hooks/useTelegram";
import { useGetUserInformationQuery } from "src/store/features/user/user.api";
import { ReactComponent as Spinner } from "src/assets/svg/spinner.svg";
import {
  isUserVerificationPending,
  isUserVerified,
} from "src/shared/user/verification";
import { useVerifyUser } from "src/shared/hooks/user/useVerifyUser";
import { UserRole } from "src/shared/userRole";

const FreelancerNavigation = () => {
  const { handleExpandPage } = useExpandPageContext();
  const { tg, telegramUserId } = useTelegram();
  const { handleVerifyUser, isLoading: isTriggeringVerificationLoading } =
    useVerifyUser();

  const {
    data: user,
    isLoading,
    isFetching,
  } = useGetUserInformationQuery(telegramUserId);

  if (isLoading || isFetching) {
    return (
      <section className="mt-8 flex flex-col gap-4 bg-black bg-opacity-25 mx-4 rounded-xl py-4">
        <span className="py-4 px-4 pr-8 bg-gray-400 mx-4 rounded-full h-[10px] animate-pulse"></span>
        <span className="py-4 px-4 pr-8 bg-gray-400 mx-4 rounded-full h-[10px] animate-pulse"></span>
        <span className="py-4 px-4 pr-8 bg-gray-400 mx-4 rounded-2xl h-[100px] animate-pulse"></span>
        <p className="text-gray-400 text-sm font-bold text-center px-4 blur-[2px] animate-pulse">
          Завантаження. Будь ласка, почекайте.
        </p>
      </section>
    );
  }

  if (isUserVerified(user)) {
    return (
      <ul className={`mt-8 flex flex-col`}>
        {FREELANCER_NAVIGATION_LIST.map(
          ({ id, text, url, rightSideText, leftIcon }) => (
            <NavigationItem
              key={id}
              id={id}
              leftIcon={leftIcon}
              queryParams={`?role=${UserRole.FREELANCER}`}
              rightSideText={rightSideText}
              text={text}
              url={url}
              onDoubleClick={() => {
                tg.expand();
                handleExpandPage();
              }}
            />
          ),
        )}
      </ul>
    );
  }

  if (isUserVerificationPending(user)) {
    return (
      <section className="mt-8 flex flex-col p-4 gap-2 bg-green-600 m-4 rounded-md shadow-md">
        <h1 className="text-lg w-full text-white text-center font-bold">
          Ви успішно завершили верифікацію.
        </h1>
        <p className="text-white opacity-75 text-center text-sm">
          Тепер, будь ласка, зачекайте, доки адмін перевірить ваші дані!
        </p>
      </section>
    );
  }

  return (
    <ul className="mt-8 flex flex-col p-4 gap-2">
      <button
        className="bg-green-500 py-4 rounded-lg font-bold text-white tracking-wide flex items-center justify-center"
        onClick={handleVerifyUser}
      >
        {isTriggeringVerificationLoading ? (
          <div className="w-5 h-5 animate-spin">
            <Spinner />
          </div>
        ) : (
          "Стати виконавцем"
        )}
      </button>
      <p className="w-full text-gray-400 text-xs text-center">
        (!) Для того, щоб брати замовлення потрібно пройти верифікацію та стати
        виконавцем.
        <section className="text-left mt-4 bg-gray-300 text-black rounded p-4">
          <h1 className="uppercase mb-2 font-bold tracking-wide">Кроки:</h1>
          <ul className="flex flex-col gap-2 text-xs font-medium">
            <li>1. Вас перекине на бота.</li>
            <li>2. Вам прийдеться записати відео, де ви хвалите адміна.</li>
            <li>3. До 24 годин ви будете одобрені.</li>
          </ul>
        </section>
      </p>
    </ul>
  );
};

export default FreelancerNavigation;
