import { motion, useScroll } from "framer-motion";
import { ReactComponent as EmptyDocument } from "src/assets/svg/empty-document.svg";
import { ReactComponent as FillDocument } from "src/assets/svg/fill-document.svg";

import Title from "src/components/Title";
import { useRef } from "react";

const tg = Telegram.WebApp;

const CreateOrder = () => {
  const ref = useRef(null);

  const { ...rest } = useScroll({ container: ref });

  const handleSelect = () => {
    tg.expand();
  };

  return (
    <div className="flex flex-col gap-4">
      <Title>Виберіть варіант</Title>
      <div className="grid grid-cols-2 gap-4" onClick={handleSelect}>
        <div className="aspect-square bg-gray-100 active:bg-gray-300 rounded-lg p-3 flex flex-col items-center justify-center gap-4">
          <EmptyDocument className="w-[50%] h-[50%]" />
          <div className="text-[12px] uppercase">Швидке створення</div>
        </div>
        <div className="aspect-square bg-gray-100 active:bg-gray-300 rounded-lg p-3 flex flex-col items-center justify-center gap-4">
          <FillDocument className="w-[50%] h-[50%]" />
          <div className="text-[12px] uppercase">Детальне створення</div>
        </div>
      </div>
      <div className="h-[100vh] bg-red-400 w-full" ref={ref}>
        <motion.div className="fixed top-0 left-0 right-0 h-[10px] bg-red-400">
          {JSON.stringify(rest.scrollYProgress)}
        </motion.div>
      </div>
    </div>
  );
};

export default CreateOrder;
