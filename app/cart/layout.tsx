import React from "react";
import AppNavBar from "@/components/core/AppNavbar";

interface Props {
  children: React.ReactNode;
}
const CartLayout = ({ children }: Props) => {
  return (
    <div>
      <AppNavBar />
      {children}
    </div>
  );
};

export default CartLayout;
