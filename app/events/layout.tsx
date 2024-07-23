import React from "react";
import AppNavBar from "@/components/core/AppNavbar";

interface Props {
  children: React.ReactNode;
}
const EventsLayout = ({ children }: Props) => {
  return (
    <div>
      <AppNavBar />
      {children}
    </div>
  );
};

export default EventsLayout;
