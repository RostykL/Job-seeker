import SquareMenuItem from "src/components/SquareMenuItem";
import { HOME_NAVIGATION_LIST } from "src/constants/HomeNavigationList";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {HOME_NAVIGATION_LIST.map(
        ({ id, title, description, icon, pathname }) => (
          <SquareMenuItem
            Icon={icon}
            description={description}
            key={id}
            pathname={pathname}
            title={title}
          />
        )
      )}
    </div>
  );
};

export default Home;
