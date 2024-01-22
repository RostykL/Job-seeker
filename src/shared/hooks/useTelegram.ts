import { useEffect } from "react";
import { formatFullname } from "src/shared/formatFullname";

const tg = Telegram.WebApp;

export const useTelegram = () => {
  useEffect(() => {
    tg.expand();
  }, []);

  const hapticFeedback = (
    style?: "light" | "medium" | "rigid" | "heavy" | "soft",
  ) => tg.HapticFeedback.impactOccurred(style || "soft");

  return {
    tg,
    hapticFeedback,
    queryId: tg.initDataUnsafe?.query_id,
    telegramUserId: tg.initDataUnsafe.user?.id,
    telegramUserFullName: formatFullname(
      tg.initDataUnsafe.user?.first_name,
      tg.initDataUnsafe.user?.last_name,
    ),
  };
};
