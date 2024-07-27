"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { User, ShoppingCart, LogOut } from "lucide-react";
import Link from "next/link";

const AccountDropdown = () => {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="h-10 w-10 hover:bg-slate-400 rounded-full flex items-center justify-center bg-white hover:cursor-pointer">
          <User size={25} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Link href="/cart" className="flex">
            <ShoppingCart size={20} />
            <span className="ml-3">Cart</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/logout" className="flex">
            <LogOut size={20} />
            <span className="ml-3">Logout</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
