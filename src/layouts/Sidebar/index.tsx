import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';

import { routes } from "@/routes";
import { useAppSelector } from "@/store/hooks";
import { selectSidebarOpen } from "@/store/ui/selectors";

import "./style.scss";

interface SidebarItemModel {
  icon?: React.ReactNode;
  label: string;
  isDivider?: boolean;
  path?: string;
}

const sidebarData: SidebarItemModel[] = [
  {
    icon: <AccountCircleIcon fontSize="small" />,
    label: "Мой аккаунт",
    path: routes().account,
  },
  {
    icon: <SecurityIcon fontSize="small" />,
    label: "Безопасность",
    path: routes().security,
  },
  {
    icon: <SettingsIcon fontSize="small" />,
    label: "Настройки",
    path: routes().settings,
  },
  { isDivider: true, label: "" },
  {
    icon: <AssessmentIcon fontSize="small" />,
    label: "Счета",
    path: routes().bills,
  },
  {
    icon: <PaymentIcon fontSize="small" />,
    label: "Оплаты",
    path: routes().payments,
  },
  {
    icon: <CheckCircleIcon fontSize="small" />,
    label: "Исполнение",
    path: routes().usage,
  },
];

const Sidebar = () => {
  const open = useAppSelector(selectSidebarOpen);

  if (!open) {
    return null;
  }

  return (
    <aside className="layout-sidebar">
      {sidebarData.map((item, index) => {
        if (item.isDivider) {
          return <div key={`divider-${index}`} className="sidebar-divider" />;
        }

        return (
          <NavLink
            key={item.path}
            className="sidebar-item"
            to={item.path || routes().home}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;
