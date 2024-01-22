import React, { useEffect } from "react";
import { router } from "src/routes";
import { RouterProvider, useSearchParams } from "react-router-dom";
import { useTelegram } from "src/shared/hooks/useTelegram";
import { UserRole } from "src/shared/userRole";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return <RouterProvider router={router} />;
}

export default App;
