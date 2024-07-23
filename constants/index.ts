import { ShoppingItem } from "@/interfaces";
import c1 from "@/public/images/c1.jpeg";
import c2 from "@/public/images/c2.jpeg";
import c3 from "@/public/images/c3.jpeg";
import c4 from "@/public/images/c4.jpeg";
// import the equipment images

import e1 from "@/public/images/e1.jpg";
import e2 from "@/public/images/e2.jpg";
import e3 from "@/public/images/e3.jpg";
import e4 from "@/public/images/e4.jpg";

// coffee constants
export const coffeeItems: ShoppingItem[] = [
  {
    name: "Espresso",
    img: c1,
    description: "Rich and bold shot",
    price: 3.0,
  },
  {
    name: "Latte",
    img: c2,
    description: "Smooth milk blend",
    price: 4.5,
  },
  {
    name: "Cappuccino",
    img: c3,
    description: "Frothy and creamy",
    price: 4.0,
  },
  {
    name: "Americano",
    img: c4,
    description: "Strong and simple",
    price: 3.5,
  },
  {
    name: "Mocha",
    img: c2,
    description: "Chocolate and coffee",
    price: 5.0,
  },
  {
    name: "Macchiato",
    img: c3,
    description: "Espresso with foam",
    price: 4.2,
  },
  {
    name: "Flat White",
    img: c4,
    description: "Silky smooth texture",
    price: 4.8,
  },
  {
    name: "Iced Coffee",
    img: c1,
    description: "Chilled and refreshing",
    price: 4.0,
  },
];

// brewing equipment constants

export const brewingItems: ShoppingItem[] = [
  {
    name: "French Press",
    img: e1,
    description: "Classic coffee maker",
    price: 25.0,
  },
  {
    name: "Pour Over",
    img: e2,
    description: "Precision brewing",
    price: 20.0,
  },
  {
    name: "Espresso Machine",
    img: e3,
    description: "Professional shots",
    price: 150.0,
  },
  {
    name: "Coffee Grinder",
    img: e4,
    description: "Freshly ground beans",
    price: 30.0,
  },
  {
    name: "AeroPress",
    img: e2,
    description: "Portable coffee press",
    price: 35.0,
  },
  {
    name: "Moka Pot",
    img: e3,
    description: "Stovetop espresso maker",
    price: 20.0,
  },
  {
    name: "Drip Coffee Maker",
    img: e4,
    description: "Easy home brewing",
    price: 40.0,
  },
  {
    name: "Cold Brew Maker",
    img: e1,
    description: "Smooth cold brew",
    price: 25.0,
  },
];
