import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { ShoppingItem } from "@/interfaces";

const ShoppingCard = (props: ShoppingItem) => {
  return (
    <Card>
      <Image
        src={props.img}
        alt="Coffee Blend 1"
        width={300}
        height={200}
        className="rounded-t-lg object-cover w-full h-48"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{props.name}</h3>
        <p className="text-muted-foreground text-sm">{props.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold">${props.price}</span>
          <Button>Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShoppingCard;
