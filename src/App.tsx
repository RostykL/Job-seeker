import React, { useEffect } from "react";
import { router } from "src/routes";
import { RouterProvider } from "react-router-dom";

const tg = Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
