import { useEffect } from "react";

const tg = Telegram.WebApp;

export const useTelegram = () => {
  useEffect(() => {
    tg.expand();
  }, []);

  return { tg, queryId: tg.initDataUnsafe?.query_id };
};
