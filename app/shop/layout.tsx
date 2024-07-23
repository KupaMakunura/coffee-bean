import React from "react";
import AppNavBar from "@/components/core/AppNavbar";

interface Props {
  children: React.ReactNode;
}
const ShopLayout = ({ children }: Props) => {
  return (
    <div>
      <AppNavBar />
      {children}
    </div>
  );
};

export default ShopLayout;
