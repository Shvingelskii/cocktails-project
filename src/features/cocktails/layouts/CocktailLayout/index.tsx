import React, { FC } from "react";
import SidebarMenu from "@/features/cocktails/containers /SidebarMenu";
import "./index.scss";

interface ICocktailLayoutProps {
  children: React.ReactNode;
}

const CocktailLayout: FC<ICocktailLayoutProps> = ({ children }) => {
  return (
    <section className="main-layout">
      <SidebarMenu />
      <div className="main-layout__inner-page">{children}</div>
    </section>
  );
};

export default CocktailLayout;
