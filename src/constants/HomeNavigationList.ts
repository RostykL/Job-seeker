import { ReactComponent as HomeIcon } from "src/assets/svg/home.svg";
import { ReactComponent as InvoiceIcon } from "src/assets/svg/invoice.svg";
import { ROUTES } from "src/routes";

interface HomeNavigationList {
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  id: number;
  pathname: string;
  title: string;
}

export const HOME_NAVIGATION_LIST: HomeNavigationList[] = [
  {
    description: "Перейти на головну",
    icon: HomeIcon,
    id: 1,
    pathname: "/",
    title: "Головна",
  },
  {
    description: "Створіть нове замовлення",
    icon: InvoiceIcon,
    id: 2,
    pathname: "/create-order",
    title: "Створити ",
  },
];
