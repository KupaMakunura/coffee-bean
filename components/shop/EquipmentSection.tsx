import { brewingItems } from "@/constants";
import ShoppingCard from "../core/ShoppingCard";

const EquipmentSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 w-full max-md:px-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex w-full justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Brewing Equipment
          </h2>
        </div>
        <div className="grid max-md:grid-cols-1 gap-8 md:grid-cols-4">
          {brewingItems.map((item, index) => (
            <ShoppingCard
              key={index}
              id={item.id}
              img={item.img}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
