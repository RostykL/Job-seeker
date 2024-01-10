import { ROUTES } from "src/types/routes";

// TODO: change rightSideText to another value or remove it since we will fetch this information from the backend

export interface NavItem {
  id: number;
  rightSideText: () => React.ReactNode;
  text: string;
  url: ROUTES;
}

export const COMMON_NAVIGATION_LIST: NavItem[] = [
  {
    id: 10001,
    rightSideText: () => null,
    text: "Підтримка",
    url: ROUTES.SUPPORT,
  },
  {
    id: 10002,
    rightSideText: () => null,
    text: "Настройки",
    url: ROUTES.SETTINGS,
  },
];

export const CLIENT_NAVIGATION_LIST: NavItem[] = [
  {
    id: 0,
    rightSideText: () => 2,
    text: "Мої Угоди",
    url: ROUTES.CLIENT_DEALS,
  },
  {
    id: 1,
    rightSideText: () => null,
    text: "Створити замовлення",
    url: ROUTES.CLIENT_CREATE_ORDER,
  },
  {
    id: 2,
    rightSideText: () => null,
    text: "Пошук Кандидатів",
    url: ROUTES.CLIENT_SEARCH_CANDIDATES,
  },
  ...COMMON_NAVIGATION_LIST,
];

export const FREELANCER_NAVIGATION_LIST: NavItem[] = [
  {
    id: 3,
    rightSideText: () => 5,
    text: "Мої Роботи",
    url: ROUTES.FREELANCER_JOBS,
  },
  {
    id: 4,
    rightSideText: () => null,
    text: "Пошук Роботи",
    url: ROUTES.FREELANCER_JOB_SEARCH,
  },
  {
    id: 5,
    rightSideText: () => (
      <div className="rounded p-1 bg-blue-400 text-white  text-md">
        259.43 $
      </div>
    ),
    text: "Вивести кошти",
    url: ROUTES.FREELANCER_WITHDRAW_FUNDS,
  },
  ...COMMON_NAVIGATION_LIST,
];
