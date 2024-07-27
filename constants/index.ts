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
import { Event } from "@/interfaces";

// coffee constants
export const coffeeItems: ShoppingItem[] = [
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    name: "Espresso",
    img: c1,
    description: "Rich and bold shot",
    price: 3.0,
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    name: "Latte",
    img: c2,
    description: "Smooth milk blend",
    price: 4.5,
  },
  {
    id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    name: "Cappuccino",
    img: c3,
    description: "Frothy and creamy",
    price: 4.0,
  },
  {
    id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    name: "Americano",
    img: c4,
    description: "Strong and simple",
    price: 3.5,
  },
  {
    id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
    name: "Mocha",
    img: c2,
    description: "Chocolate and coffee",
    price: 5.0,
  },
  {
    id: "6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u",
    name: "Macchiato",
    img: c3,
    description: "Espresso with foam",
    price: 4.2,
  },
  {
    id: "7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v",
    name: "Flat White",
    img: c4,
    description: "Silky smooth texture",
    price: 4.8,
  },
  {
    id: "8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w",
    name: "Iced Coffee",
    img: c1,
    description: "Chilled and refreshing",
    price: 4.0,
  },
];

// brewing equipment constants
export const brewingItems: ShoppingItem[] = [
  {
    id: "9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x",
    name: "French Press",
    img: e1,
    description: "Classic coffee maker",
    price: 25.0,
  },
  {
    id: "0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y",
    name: "Pour Over",
    img: e2,
    description: "Precision brewing",
    price: 20.0,
  },
  {
    id: "1k2l3m4n-5o6p-7q8r-9s0t-1u2v3w4x5y6z",
    name: "Espresso Machine",
    img: e3,
    description: "Professional shots",
    price: 150.0,
  },
  {
    id: "2l3m4n5o-6p7q-8r9s-0t1u-2v3w4x5y6z7a",
    name: "Coffee Grinder",
    img: e4,
    description: "Freshly ground beans",
    price: 30.0,
  },
  {
    id: "3m4n5o6p-7q8r-9s0t-1u2v-3w4x5y6z7a8b",
    name: "AeroPress",
    img: e2,
    description: "Portable coffee press",
    price: 35.0,
  },
  {
    id: "4n5o6p7q-8r9s-0t1u-2v3w-4x5y6z7a8b9c",
    name: "Moka Pot",
    img: e3,
    description: "Stovetop espresso maker",
    price: 20.0,
  },
  {
    id: "5o6p7q8r-9s0t-1u2v-3w4x-5y6z7a8b9c0d",
    name: "Drip Coffee Maker",
    img: e4,
    description: "Easy home brewing",
    price: 40.0,
  },
  {
    id: "6p7q8r9s-0t1u-2v3w-4x5y-6z7a8b9c0d1e",
    name: "Cold Brew Maker",
    img: e1,
    description: "Smooth cold brew",
    price: 25.0,
  },
];

export const coffeeEvents: Event[] = [
  {
    id: 1,
    title: "Morning Brew Meetup",
    date: "2024-08-01",
    time: "08:00 AM",
    location: "Downtown Cafe",
    description:
      "Start your day with a fresh cup of coffee and great conversations.",
  },
  {
    id: 2,
    title: "Coffee Lovers' Evening",
    date: "2024-08-02",
    time: "06:00 PM",
    location: "Central Park Coffee House",
    description:
      "An evening event for coffee enthusiasts to enjoy different brews.",
  },
  {
    id: 3,
    title: "Coffee and Networking",
    date: "2024-08-03",
    time: "10:00 AM",
    location: "City Business Hub",
    description: "Network with professionals over a cup of coffee.",
  },
  {
    id: 4,
    title: "Latte Art Workshop",
    date: "2024-08-04",
    time: "03:00 PM",
    location: "Artisan Coffee Studio",
    description: "Learn the art of creating beautiful latte designs.",
  },
  {
    id: 5,
    title: "Sunday Coffee Brunch",
    date: "2024-08-05",
    time: "11:00 AM",
    location: "Seaside Cafe",
    description: "Enjoy a delicious brunch with a variety of coffee blends.",
  },
  {
    id: 6,
    title: "Coffee Tasting Event",
    date: "2024-08-06",
    time: "02:00 PM",
    location: "Brew Masters",
    description:
      "Taste and evaluate different types of coffee from around the world.",
  },
  {
    id: 7,
    title: "Coffee and Books",
    date: "2024-08-07",
    time: "04:00 PM",
    location: "Book Haven Cafe",
    description: "Combine your love of coffee and books at this relaxed event.",
  },
  {
    id: 8,
    title: "Coffee and Dessert Pairing",
    date: "2024-08-08",
    time: "07:00 PM",
    location: "Sweet Treats Cafe",
    description: "Discover the perfect coffee and dessert combinations.",
  },
  {
    id: 9,
    title: "Espresso Lovers' Meetup",
    date: "2024-08-09",
    time: "09:00 AM",
    location: "Urban Coffee Lounge",
    description: "A meetup for those who love a strong cup of espresso.",
  },
  {
    id: 10,
    title: "Coffee Brewing Techniques",
    date: "2024-08-10",
    time: "01:00 PM",
    location: "Brew Lab",
    description: "Learn various coffee brewing techniques from the experts.",
  },
  {
    id: 11,
    title: "Outdoor Coffee Picnic",
    date: "2024-08-11",
    time: "05:00 PM",
    location: "Riverside Park",
    description: "Enjoy coffee in the great outdoors with friends.",
  },
  {
    id: 12,
    title: "Coffee and Music Night",
    date: "2024-08-12",
    time: "08:00 PM",
    location: "Jazz Cafe",
    description: "Enjoy live music while sipping your favorite coffee.",
  },
  {
    id: 13,
    title: "Coffee Science Talk",
    date: "2024-08-13",
    time: "10:30 AM",
    location: "Techno Coffee Lab",
    description: "Learn about the science behind coffee making.",
  },
  {
    id: 14,
    title: "Coffee History Tour",
    date: "2024-08-14",
    time: "02:30 PM",
    location: "Old Town Cafe",
    description: "A guided tour through the history of coffee.",
  },
  {
    id: 15,
    title: "Coffee Art Exhibition",
    date: "2024-08-15",
    time: "06:30 PM",
    location: "Gallery Cafe",
    description: "An exhibition showcasing coffee-related artwork.",
  },
];

interface Link {
  title: string;
  href: string;
}

export const links: Link[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "About",
    href: "/#about",
  },

  {
    title: "Contact",
    href: "/#contact",
  },
];
