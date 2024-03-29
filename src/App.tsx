import React, { useEffect } from "react";
import { router } from "src/routes";
import { RouterProvider } from "react-router-dom";
import { useTelegram } from "src/shared/hooks/useTelegram";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    tg.enableClosingConfirmation();
  }, [tg]);

  useEffect(() => {
    tg.MainButton.isVisible = true;
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
