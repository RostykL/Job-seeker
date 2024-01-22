import { useTriggerVerificationMutation } from "src/store/features/user/user.api";
import { useCallback } from "react";
import { useTelegram } from "src/shared/hooks/useTelegram";

export const useVerifyUser = () => {
  const { tg, queryId } = useTelegram();

  const [triggerVerification, { isLoading }] = useTriggerVerificationMutation();

  const handleVerifyUser = useCallback(async () => {
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
      alert("Виникла помилка з верифікаціює. Попробуйте пізніше.");
    }
  }, [queryId, tg.HapticFeedback, triggerVerification]);

  return { handleVerifyUser, isLoading };
};
