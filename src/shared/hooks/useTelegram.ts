import { useEffect } from "react";
import { formatFullname } from "src/shared/formatFullname";

const tg = Telegram.WebApp;

export const useTelegram = () => {
  useEffect(() => {
    tg.expand();
  }, []);

  return {
    tg,
    queryId: tg.initDataUnsafe?.query_id,
    telegramUserId: tg.initDataUnsafe.user?.id,
    telegramUserFullName: formatFullname(
      tg.initDataUnsafe.user?.first_name,
      tg.initDataUnsafe.user?.last_name,
    ),
  };
};
