import React from "react";
import CoffeeSection from "@/components/shop/CoffeeSection";
import EquipmentSection from "@/components/shop/EquipmentSection";

const ShopPage = () => {
  return (
    <div>
      <div className="flex w-full justify-center">
        <CoffeeSection />
      </div>
      <div className="flex w-full justify-center">
        <EquipmentSection />
      </div>
    </div>
  );
};

export default ShopPage;
