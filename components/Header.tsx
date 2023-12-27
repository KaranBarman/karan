import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Instagram, User, User2 } from "lucide-react";

const Header = () => {
  return (
    <header
      className="w-full h-32
   bg-cover flex items-center bg-gradient-to-r from-gray-900"
    >
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href={"/"}>
              <Image
                src={"/me.png"}
                height={100}
                width={100}
                alt="profile"
                className="rounded-full border-white border-4 bg-gradient-to-tr from-white"
                unoptimized
              />
            </Link>
            <h1 className="text-white flex flex-col">
              <span className="font-bold text-xl md:text-3xl">
                Karan Barman
              </span>
              <span className="text-sm text-muted-foreground">
                <Link href={"https://www.instagram.com/http.karan17/"}>
                  Fullstack Developer
                </Link>
              </span>
            </h1>
          </div>
          <div className="flex gap-2">
            <Link
              href={"https://www.instagram.com/http.karan17/"}
              className={buttonVariants({
                variant: "secondary",
                className: "flex gap-2 items-center",
              })}
            >
              {}
              <span className="hidden sm:block">Find me on instagrams</span>
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href={"/contact"}
              className={buttonVariants({
                variant: "emerald",
                className: "flex gap-2 items-center",
              })}
            >
              {}
              <span className="hidden sm:block">Contact</span>
              <User2 className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
