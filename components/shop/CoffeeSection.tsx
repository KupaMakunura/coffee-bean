import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import c1 from "@/public/images/c1.jpeg";
import c2 from "@/public/images/c2.jpeg";
import c3 from "@/public/images/c3.jpeg";
import c4 from "@/public/images/c4.jpeg";
import Image from "next/image";

const CoffeeSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex w-full justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Our Unique Coffee Blends
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card>
            <Image
              src={c1}
              alt="Coffee Blend 1"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Midnight Mocha</h3>
              <p className="text-muted-foreground">
                A rich and decadent blend of dark roasted beans.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold">$15.99</span>
                <Button>Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <Image
              src={c2}
              alt="Coffee Blend 1"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Sunrise Sunrise</h3>
              <p className="text-muted-foreground">
                A bright and balanced blend of medium roasted beans.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold">$13.99</span>
                <Button>Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <Image
              src={c3}
              alt="Coffee Blend 1"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Afternoon Delight</h3>
              <p className="text-muted-foreground">
                A smooth and aromatic blend of light roasted beans.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold">$12.99</span>
                <Button>Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <Image
              src={c4}
              alt="Coffee Blend 1"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Twilight Tango</h3>
              <p className="text-muted-foreground">
                A bold and complex blend of dark and medium roasted beans.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold">$16.99</span>
                <Button>Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;
