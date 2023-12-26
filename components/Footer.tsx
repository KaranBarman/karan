import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-8 bg-gradient-to-r from-blue-600">
      <MaxWidthWrapper>
        <Link
          href={"/contactme"}
          className={buttonVariants({ variant: "secondary" })}
        >
          Contact me
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
