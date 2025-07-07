import { useState, useEffect } from "react";
import { COCKTAILS_PAGES_ARRAY } from "@/shared/constants/routes.ts";
import { capitalize } from "lodash";
import Drawer from "react-modern-drawer";
import { useLocation } from "react-router-dom";
import MenuItem from "@/shared/ui/MenuItem";
import "react-modern-drawer/dist/index.css";
import "./index.scss";

const SidebarMenu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const renderMenu = () => {
    return (
      <nav className="sidebar">
        <ul>
          {COCKTAILS_PAGES_ARRAY.map((path) => {
            // remove '/'
            const pageKey = path.slice(1);
            const title = capitalize(pageKey);

            return (
              <li key={path}>
                <MenuItem path={path} title={title} />
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className="mobile-drawer-menu">
        <ul className="mobile-drawer-menu__list">
          <button aria-label="Open menu" type="button" onClick={toggleDrawer}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
              alt="burger-menu"
              aria-hidden="true"
            />
          </button>
          {/*another bottom menu bottoms...*/}
        </ul>

        <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="bla bla bla">
          {renderMenu()}
        </Drawer>
      </div>
      {renderMenu()}
    </>
  );
};

export default SidebarMenu;
