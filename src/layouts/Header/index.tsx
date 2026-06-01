import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DescriptionIcon from '@mui/icons-material/Description';
import LogoutIcon from '@mui/icons-material/Logout';
import ScienceIcon from '@mui/icons-material/Science';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';


import { routes } from "@/routes";
import { logout } from "@/store/auth";
import { selectUser } from "@/store/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeUserMenu, setTheme, toggleUserMenu } from "@/store/ui/actions";
import { EnumTheme } from "@/store/ui/model";
import { selectTheme } from "@/store/ui/selectors";
import { clearStoredAuthSession } from "@/utils/authSessionStorage";

import "./style.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(selectUser);
  const currentTheme = useAppSelector(selectTheme);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    dispatch(toggleUserMenu());
  };

  const handleClose = () => {
    setAnchorEl(null);
    dispatch(closeUserMenu());
  };

  const handleLogout = () => {
    clearStoredAuthSession();
    dispatch(logout());
    handleClose();
    navigate(routes().login);
  };

  const handleThemeChange = (theme: EnumTheme) => {
    dispatch(setTheme(theme));
  };

  return (
    <header className="layout-header">
      <nav className="header-nav">
        <span className="nav-item">Menu1 &gt;</span>
        <span className="nav-item">Menu2 &gt;</span>
        <span className="nav-item">Menu3 &gt;</span>
      </nav>

      <div className="header-logo">
        <div className="logo-circle">
          0cd
          <br />
          logo
        </div>
      </div>

      <div className="header-user">
        <IconButton
          onClick={handleAvatarClick}
          aria-label="Открыть меню пользователя"
        >
          <Avatar className="user-avatar">ava</Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem disabled className="menu-email">
            <Typography variant="body2">
              {user?.login || "user@email.com"}
            </Typography>
          </MenuItem>

          <div className="menu-divider" />

          <MenuItem onClick={handleClose}>
            <SettingsIcon fontSize="small" />
            <span>Account preferences</span>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ScienceIcon fontSize="small" />
            <span>Feature previews</span>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <DescriptionIcon fontSize="small" />
            <span>Changelog</span>
          </MenuItem>

          <div className="menu-divider" />

          <div className="menu-section-title">Theme</div>

          <MenuItem
            onClick={() => handleThemeChange(EnumTheme.Dark)}
            className={currentTheme === EnumTheme.Dark ? "active-theme" : ""}
          >
            <Brightness4Icon fontSize="small" />
            <span>Dark</span>
          </MenuItem>

          <MenuItem
            onClick={() => handleThemeChange(EnumTheme.Light)}
            className={currentTheme === EnumTheme.Light ? "active-theme" : ""}
          >
            <span>Light</span>
          </MenuItem>

          <MenuItem
            onClick={() => handleThemeChange(EnumTheme.ClassicDark)}
            className={
              currentTheme === EnumTheme.ClassicDark ? "active-theme" : ""
            }
          >
            <span>Classic Dark</span>
          </MenuItem>

          <MenuItem
            onClick={() => handleThemeChange(EnumTheme.System)}
            className={currentTheme === EnumTheme.System ? "active-theme" : ""}
          >
            <span>● System</span>
          </MenuItem>

          <div className="menu-divider" />

          <MenuItem onClick={handleLogout} className="menu-logout">
            <LogoutIcon fontSize="small" />
            <span>Log out</span>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;