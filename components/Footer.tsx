import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-8 bg-gradient-to-r from-gray-900">
      <MaxWidthWrapper>
        <Link
          href={"/contact"}
          className={buttonVariants({ variant: "secondary" })}
        >
          Contact me
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
