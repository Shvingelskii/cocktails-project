import React, { FC } from "react";
import SidebarMenu from "@/components/SidebarMenu";
import "./index.scss";

interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return (
    <section className="main-layout">
      <SidebarMenu />
      <div className="main-layout__inner-page">{children}</div>
    </section>
  );
};

export default AppLayout;
