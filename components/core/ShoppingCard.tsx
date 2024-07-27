"use client";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { ShoppingItem } from "@/interfaces";
import { useState } from "react";
import useCartStore from "@/store/cart";
import { useToast } from "../ui/use-toast";

const ShoppingCard = (props: ShoppingItem) => {
  // set quantity state

  const [quantity, setQuantity] = useState<number>(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const { toast } = useToast();

  // handle add to cart
  const handleAddToCart = () => {
    // add items to global store
    addToCart({ ...props, quantity });

    // show the toast
    toast({
      variant: "default",
      className: "bg-green-500 text-white",
      description: "Item successfully added to cart",
      title:"Cart"
    });
  };

  return (
    <Card className="md:w-64 max-md:w-full">
      <Image
        src={props.img}
        alt="Coffee Blend 1"
        width={300}
        height={200}
        className="rounded-t-lg object-cover w-full h-48"
      />
      <CardContent className="p-4">
        <div className="flex w-full justify-between">
          <h3 className="text-lg font-semibold mb-2">{props.name}</h3>
          <span className="font-semibold mt-2">${props.price}</span>
        </div>

        <p className="text-muted-foreground text-sm">{props.description}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
            >
              -
            </Button>
            <span className="px-3 font-semibold text-sm">{quantity}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>

          <Button onClick={() => handleAddToCart()}>Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShoppingCard;
