import { links } from "@/constants";
import { ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const AppFooter = () => {
  return (
    <div
      className="grid md:grid-cols-4 px-5 max-md:px-5 max-md: w-full   gap-5 shadow py-10"
      id="contact"
    >
      {/* addresses column */}
      <div className="w-full flex-1 justify-start space-y-3">
        <div className="flex pb-2 items-center space-x-3 ">
          <Link href="/" className="font-semibold">
            Bean Boutique Coffee Shop
          </Link>
        </div>
        <div className="w-full">
          <p className="text-sm font-semibold">
            Location:{" "}
            <span className="font-normal">
              88652 Mainway Middles, Waterfalls, Harare
            </span>
          </p>
        </div>
        <div className="w-full">
          <p className="text-sm font-semibold">
            Phone: <span className="font-normal">+263 77 123 4567</span>
          </p>
        </div>
        <div className="w-full">
          <p className="text-sm font-semibold">
            Email: <span className="font-normal">contact@coffeebean.com</span>
          </p>
        </div>
      </div>

      {/* useful links section */}
      <div className="w-full flex-1 space-y-3 mt-2">
        <div className="pb-2">
          <p className="font-semibold text-lg">Useful Links</p>
        </div>

        <div className="flex-1 space-y-2">
          <ul className="space-y-2 cursor-pointer grid grid-flow-row-dense">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="space-x-2 hover:font-semibold text-sm"
              >
                <ChevronRight className="inline-block mr-2" />
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full flex-1 mt-2 space-y-3">
        <div className="pb-2 ">
          <p className="font-semibold text-lg">Social Media</p>
        </div>
        <div className="flex-1 space-y-2">
          <div className="text-sm flex space-x-2">
            <Facebook />
            <span>Facebook</span>
          </div>

          <div className="text-sm flex space-x-2">
            <Twitter />
            <span>Twitter</span>
          </div>

          <div className="text-sm flex space-x-2">
            <Instagram />
            <span>Instagram</span>
          </div>
        </div>
      </div>

      <div className="w-full mt-2 space-y-3">
        <div className="pb-2">
          <p className="text-lg font-semibold">Leave a message</p>
        </div>
        <Input placeholder="Enter full name" />
        <Textarea placeholder="Enter message" />
        <Input placeholder="Enter email" />

        <div className="flex w-full justify-end mt-3">
          <Button>Send message</Button>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
