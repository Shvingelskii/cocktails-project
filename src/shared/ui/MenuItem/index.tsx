import { NavLink } from "react-router-dom";
import "./index.scss";

interface IMenuItemProps {
  path: string;
  title: string;
}

const MenuItem = ({ path, title }: IMenuItemProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `menu-item ${isActive ? "menu-item__active" : ""}`}
    >
      {title}
    </NavLink>
  );
};

export default MenuItem;
