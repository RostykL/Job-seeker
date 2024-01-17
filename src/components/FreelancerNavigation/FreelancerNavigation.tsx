import { FREELANCER_NAVIGATION_LIST } from "src/constants/NavigationList";
import NavigationItem from "src/components/Layout/NavigationSidebar/NavigationItem";
import { useHighlightNavigation } from "src/shared/hooks/useHighlightNavigation";
import { useExpandPageContext } from "src/providers/ExpandPageProdiver";
import { useTelegram } from "src/shared/hooks/useTelegram";
import {
  useGetUserInformationQuery,
  useTriggerVerificationMutation,
  useVerifyUserMutation,
} from "src/store/features/user/user.api";
import { ReactComponent as Spinner } from "src/assets/svg/spinner.svg";
import { useState } from "react";

const FreelancerNavigation = () => {
  const isNavigationSelected = useHighlightNavigation();
  const { handleExpandPage } = useExpandPageContext();
  const { tg, telegramUserId, queryId } = useTelegram();

  const [triggerVerification, { isLoading: isTriggeringVerificationLoading }] =
    useTriggerVerificationMutation();
  const { data, isLoading, isFetching } =
    useGetUserInformationQuery(telegramUserId);

  const handleVerifyUser = async () => {
    tg.HapticFeedback.impactOccurred("soft");
    if (!queryId) return;
    try {
      const choice = window.confirm(
        "Ви покинене програму, для того, щоб верифікуватися, згодні?",
      );
      if (choice) {
        await triggerVerification(queryId);
      }
    } catch (e) {
      alert("Error occurred");
    }
  };

  if (isLoading || isFetching) {
    return (
      <section className="mt-8 flex flex-col gap-4 bg-black opacity-25 mx-4 rounded-xl py-4">
        <span className="opacity-20 py-4 px-4 pr-8 bg-gray-50 mx-4 rounded-full h-[10px] animate-pulse"></span>
        <span className="opacity-20 py-4 px-4 pr-8 bg-gray-50 mx-4 rounded-full h-[10px] animate-pulse"></span>
        <span className="opacity-20 py-4 px-4 pr-8 bg-gray-50 mx-4 rounded-2xl h-[100px] animate-pulse"></span>
        <p className="text-gray-300 text-sm font-bold text-center px-4 blur-sm animate-pulse">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          voluptas!
        </p>
      </section>
    );
  }

  if (data && data?.data?.freelancerPreferences?.isVerified) {
    return (
      <ul className={`mt-8 flex flex-col`}>
        {FREELANCER_NAVIGATION_LIST.map(({ id, text, url, rightSideText }) => {
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
        })}
      </ul>
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
