"use client";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut } from "next-auth/react";

interface Props {
  img: string;
}
const AppAvatar = ({ img }: Props) => {
  return (
    <Avatar onClick={() => signOut()} className="hover:cursor-pointer">
      <AvatarImage src={img} alt="profile" />
      <AvatarFallback>
        <User size={20} className="hover:text-primary" />
      </AvatarFallback>
    </Avatar>
  );
};

export default AppAvatar;
