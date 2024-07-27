"use client";
import { MapPin, Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Headroom from "react-headroom";
import { Button } from "../ui/button";
import LinkTooltip from "./LinkTooltip";

const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Headroom>
      <div className="flex w-full  h-[70px] py-3 px-3 shadow-md bg-transparent">
        <Link href="/" className="w-full items-center flex space-x-2">
          <span className="md:text-lg max-md:text-xs  font-semibold">
            Bean Boutique Coffee Shop
          </span>
        </Link>
        <div className="hidden md:flex space-x-5 items-center w-full justify-end">
          <Link href="/" className="hover:text-primary hover:font-semibold">
            Home
          </Link>
          <Link href="/shop" className="hover:text-primary hover:font-semibold">
            Shop
          </Link>

          <Link
            href="/events"
            className="hover:text-primary hover:font-semibold"
          >
            Events
          </Link>
          {/* links to cart */}
          <Link href="/cart" className="flex">
            <LinkTooltip message="Your cart items">
              <ShoppingCart size={20} className="hover:text-primary" />
            </LinkTooltip>
          </Link>

          <Link href="/cart" className="flex">
            <LinkTooltip message="Your events">
              <MapPin size={20} className="hover:text-primary" />
            </LinkTooltip>
          </Link>
          <Button>Sign In</Button>
        </div>

        <div className="md:hidden w-full flex items-center justify-between">
           {/* links to cart */}
           <Link href="/cart" className="flex">
            <LinkTooltip message="Your cart items">
              <ShoppingCart size={20} className="hover:text-primary" />
            </LinkTooltip>
          </Link>

          <Link href="/cart" className="flex">
            <LinkTooltip message="Your events">
              <MapPin size={20} className="hover:text-primary" />
            </LinkTooltip>
          </Link>
          <Button>Sign In</Button>
          <Menu size={30} onClick={() => setIsOpen(!isOpen)} />
        </div>
        {/* handle when the menu is Open */}
        {isOpen && (
          <div className="w-[80%] h-screen flex   fixed z-10 right-0 md:hidden shadow-sm  transition-all duration-500">
            <div className=" flex flex-col  bg-white/30 dark:bg-gray-800/30 backdrop-blur-md w-full    border-none rounded-md space-y-3 px-3">
              <div className="flex justify-start mt-3">
                <X
                  size={25}
                  className="hover:text-destructive font-semibold"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <div className="flex justify-end mt-12 w-full">
                <Link href="/" className="text-sm  hover:text-primary ">
                  Home
                </Link>
              </div>
              <div className="flex justify-end mt-12 w-full">
                <Link href="/shop" className="text-sm  hover:text-primary">
                  Shop
                </Link>
              </div>
              <div className="flex justify-end mt-12 w-full">
                <Link href="/#about" className="text-sm  hover:text-primary">
                  About
                </Link>
              </div>
              <div className="flex justify-end mt-12 w-full">
                <Link href="/events" className="text-sm  hover:text-primary">
                  Events
                </Link>
              </div>
              <div className="flex justify-end mt-12 w-full">
                <Link href="/#contact" className="text-sm  hover:text-primary">
                  Contact
                </Link>
              </div>

              <div className="bottom-0 fixed py-3">
                <p className="text-xs">
                  &copy; 2024 Bean Boutique Coffee Shop.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Headroom>
  );
};

export default AppNavBar;
